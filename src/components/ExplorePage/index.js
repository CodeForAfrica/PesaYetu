import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useReducer, useState } from "react";
import useSWR from "swr";

import Location from "@/pesayetu/components/HURUmap/Location";
import Panel from "@/pesayetu/components/HURUmap/Panel";
import Link from "@/pesayetu/components/Link";
import fetchProfile from "@/pesayetu/utils/fetchProfile";

const Map = dynamic(() => import("@/pesayetu/components/HURUmap/Map"), {
  ssr: false,
});

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, zIndex }) => ({
    root: {
      position: "relative",
      height: "calc(100vh - 88px)",
      [breakpoints.up("lg")]: {
        height: "calc(100vh - 110px)",
        position: "fixed",
        left: 0,
        right: 0,
      },
      "& .tooltipPop": {
        background: palette.background.default,
        boxShadow: "0px 3px 6px #00000029",
        height: typography.pxToRem(36),
        width: typography.pxToRem(88),
        "& .level": {
          background: palette.primary.main,
          borderRadius: typography.pxToRem(4),
          color: palette.text.secondary,
          display: "flex",
          fontSize: typography.pxToRem(7),
          fontWeight: "bold",
          height: typography.pxToRem(17),
          justifyContent: "center",
          lineHeight: 10 / 7,
          margin: "0 auto",
          marginTop: typography.pxToRem(-15),
          paddingTop: typography.pxToRem(2),
          textTransform: "uppercase",
          width: typography.pxToRem(62),
        },
        "& .name": {
          textAlign: "center",
          fontSize: typography.pxToRem(9),
          fontWeight: "bold",
          lineHeight: 13 / 9,
          marginTop: typography.pxToRem(5),
          textTransform: "capitalize",
        },
      },
    },
    map: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "block",
      },
    },
    location: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "flex",
        left: 0,
        margin: "0 auto",
        position: "absolute",
        right: 0,
        top: typography.pxToRem(52),
        zIndex: zIndex.appBar,
      },
    },
  })
);

function extendProfileTags(profile, options) {
  const { tags: originalTags, ...other } = profile || {};
  if (!originalTags) {
    return profile;
  }

  const tags = originalTags.map(({ code, ...otherTags }) => ({
    ...otherTags,
    code,
    component: Link,
    href: `/explore/${code.toLowerCase()}`,
    shallow: true,
    underline: "none",
    ...options,
  }));
  return { ...other, tags };
}

function initializer({ profiles, options }) {
  const [primary, secondary] = profiles;
  const [primaryOptions, secondaryOptions] = options;

  return {
    isPinning: true,
    primary: extendProfileTags(primary, primaryOptions),
    secondary: extendProfileTags(secondary, secondaryOptions),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch": {
      const code = action.payload?.code;
      if (code) {
        let profileType = "primary";
        if (state.isPinning) {
          profileType = "secondary";
        }
        const newState = { ...state };
        newState[profileType].code = code;
        newState[profileType].shouldFetch = true;
        return newState;
      }
      return state;
    }
    case "show": {
      const { profile, ...others } = action.payload || {};
      const code = profile?.geography?.code;
      if (action.payload && code) {
        const profileType = ["primary", "secondary"].find(
          (type) => state[type]?.code === code
        );
        if (profileType) {
          const newState = { ...state };
          newState[profileType] = extendProfileTags(profile, {
            ...others,
            color: profileType,
          });
          return newState;
        }
      }
      return state;
    }
    case "pin":
      return { ...state, isPinning: true };
    case "compare": {
      const code = action.payload?.code;
      if (state.isPinning && code) {
        const newState = { ...state, isPinning: false };
        newState.secondary = { code, shouldFetch: true };
        return newState;
      }
      return state;
    }
    case "unpin": {
      const newState = { ...state, isPinning: false };
      const code = action.payload?.code;
      if (state.secondary?.geography?.code === code) {
        newState.secondary = undefined;
      } else if (state.primary?.geography?.code === code && state.secondary) {
        // NOTE: need to reset color from secondary back to primary as well
        newState.primary = extendProfileTags(newState.secondary, {
          color: "primary",
        });
        newState.secondary = undefined;
      }
      return newState;
    }
    default:
      throw new Error();
  }
}

function ExplorePage({ apiUri, panelProps, profile: profileProp, ...props }) {
  const classes = useStyles(props);
  const profiles = Array.isArray(profileProp) ? profileProp : [profileProp];
  // NOTE: This setState and the corresponding useEffect are "hacks" since at
  //       this point, useReducer hasn't been called yet so we can't use
  //       dispatch directly but we need handleClickTag for initializer.
  const [geoCode, setGeoCode] = useState(null);
  const handleClickTag = (_, { code }) => {
    setGeoCode(code);
  };
  const [state, dispatch] = useReducer(
    reducer,
    {
      profiles,
      options: [
        { color: "primary", onClick: handleClickTag },
        { color: "secondary", onClick: handleClickTag },
      ],
    },
    initializer
  );
  useEffect(() => {
    if (geoCode) {
      dispatch({ type: "fetch", payload: { code: geoCode } });
    }
  }, [geoCode]);
  const router = useRouter();
  const fetcher = (code) => fetchProfile(apiUri, code);
  const shouldFetch = () =>
    (state.primary.shouldFetch && state.primary.code) ||
    (state.secondary?.shouldFetch && state.secondary?.code);
  const { data, error } = useSWR(shouldFetch, fetcher);
  useEffect(() => {
    if (data) {
      dispatch({
        type: "show",
        payload: { profile: data, options: { onClick: handleClickTag } },
      });
    }
  }, [data, state.secondary?.code, state.secondary?.shouldFetch]);

  const handleClickMap = (e, feature) => {
    const { code, level, name } = feature.properties;
    const newPath = state.isPinning
      ? `${state.primary.code}-vs-${code}`
      : `${code}`;
    const href = `/explore/${newPath.toLowerCase()}`;
    router.push(href, href, { shallow: true });
    const type = state.isPinning ? "compare" : "fetch";
    const payload = { code, level, name };
    dispatch({ type, payload });
  };

  const handleClickPin = () => {
    dispatch({ type: "pin" });
  };

  const handleClickUnpin = (code) => {
    let payload;
    if (code) {
      payload = { code };
    }
    dispatch({ type: "unpin", payload });
  };

  const isLoading = shouldFetch() && !(data || error);
  const {
    geography,
    geometries,
    highlights,
    tags: primaryTags,
  } = state.primary;
  const tags = [...primaryTags];
  const { tags: secondaryTags } = state.secondary || {};
  if (secondaryTags?.length) {
    tags.push(secondaryTags[secondaryTags.length - 1]);
  }
  return (
    <>
      <Hidden mdDown implementation="css">
        <div className={classes.root}>
          <Map
            center={[0.3051933453207569, 37.908818734483155]}
            geography={geography}
            geometries={geometries}
            isPinning={state.isPinning}
            onClick={handleClickMap}
            zoom={6.25}
            {...props}
            className={classes.map}
          />
          <Location
            highlights={highlights}
            isLoading={isLoading}
            tags={tags}
            className={classes.location}
          />
        </div>
      </Hidden>
      <Panel
        isPinning={state.isPinning}
        primaryProfile={state.primary}
        secondaryProfile={state.secondary}
        onClickPin={handleClickPin}
        onClickUnpin={handleClickUnpin}
        {...panelProps}
      />
    </>
  );
}

ExplorePage.propTypes = {
  apiUri: PropTypes.string,
  panelProps: PropTypes.shape({}),
  profile: PropTypes.oneOfType(
    PropTypes.shape({
      geography: PropTypes.shape({}),
      geometries: PropTypes.shape({}),
      highlights: PropTypes.arrayOf(PropTypes.shape({})),
      tags: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        geography: PropTypes.shape({}),
        geometries: PropTypes.shape({}),
        highlights: PropTypes.arrayOf(PropTypes.shape({})),
        tags: PropTypes.arrayOf(PropTypes.shape({})),
      })
    )
  ),
};

ExplorePage.defaultProps = {
  apiUri: undefined,
  panelProps: undefined,
  profile: undefined,
};

export default ExplorePage;
