import { Hidden } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import useExplore from "./useExplore";
import useStyles from "./useStyles";

import Location from "@/pesayetu/components/HURUmap/Location";
import Panel from "@/pesayetu/components/HURUmap/Panel";
import fetchProfile from "@/pesayetu/utils/fetchProfile";

const Map = dynamic(() => import("@/pesayetu/components/HURUmap/Map"), {
  ssr: false,
});

function initialState(profiles, onClick) {
  return {
    profiles: Array.isArray(profiles) ? profiles : [profiles],
    options: [
      { color: "primary", onClick },
      { color: "secondary", onClick },
    ],
  };
}

function ExplorePage({
  apiUri,
  locationCodes,
  panelProps,
  profile: profileProp,
  ...props
}) {
  const classes = useStyles(props);
  // NOTE: This setState and the corresponding useEffect are "hacks" since at
  //       this point, useReducer hasn't been called yet so we can't use
  //       dispatch directly but we need handleClickTag for initializer.
  const [geoCode, setGeoCode] = useState(null);
  const handleClickTag = (_, { code }) => {
    setGeoCode(code);
  };
  const [state, dispatch] = useExplore(
    initialState(profileProp, handleClickTag)
  );
  useEffect(() => {
    dispatch({
      type: "reset",
      payload: initialState(profileProp, handleClickTag),
    });
  }, [dispatch, profileProp]);
  useEffect(() => {
    if (geoCode) {
      dispatch({ type: "fetch", payload: { code: geoCode } });
    }
  }, [dispatch, geoCode]);
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
  }, [dispatch, data]);

  const handleSelectLocation = (payload) => {
    const { code } = payload;
    const newPath =
      state.isPinning || state.isCompare
        ? `${state.primary.geography.code}-vs-${code}`
        : `${code}`;
    const href = `/explore/${newPath.toLowerCase()}`;
    router.push(href, href, { shallow: true });
    const type = state.isPinning || state.isCompare ? "compare" : "fetch";
    dispatch({ type, payload });
  };

  const handleClickMap = (_, feature) => {
    return handleSelectLocation(feature.properties);
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
  useEffect(() => {
    if (state.slug) {
      const href = `/explore/${state.slug}`;
      router.push(href, href, { shallow: true });
    }
    // router shouldn't part of useEffect dependencies: https://nextjs.org/docs/api-reference/next/router#userouter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.slug]);

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
            secondaryGeography={state.secondary?.geography}
            geometries={geometries}
            isPinOrCompare={state.isPinning || state.isCompare}
            isPinning={state.isPinning}
            locationCodes={locationCodes}
            onClick={handleClickMap}
            onClickUnpin={handleClickUnpin}
            zoom={7}
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
        isCompare={state.isCompare}
        locationCodes={locationCodes}
        onClickPin={handleClickPin}
        onClickUnpin={handleClickUnpin}
        onSelectLocation={handleSelectLocation}
        primaryProfile={state.primary}
        secondaryProfile={state.secondary}
        {...panelProps}
      />
    </>
  );
}

ExplorePage.propTypes = {
  apiUri: PropTypes.string,
  locationCodes: PropTypes.arrayOf(PropTypes.string),
  panelProps: PropTypes.shape({}),
  profile: PropTypes.oneOfType([
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
    ),
  ]),
};

ExplorePage.defaultProps = {
  apiUri: undefined,
  locationCodes: undefined,
  panelProps: undefined,
  profile: undefined,
};

export default ExplorePage;
