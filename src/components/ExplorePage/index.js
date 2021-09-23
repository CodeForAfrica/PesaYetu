import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

import Location from "@/pesayetu/components/HURUmap/Location";
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

function ExplorePage({ profile: profileProp, apiUri, ...props }) {
  const classes = useStyles(props);
  const [geoCode, setGeoCode] = useState(null);
  const handleCodeChange = (_, { code }) => {
    setGeoCode(code);
  };
  // Add UI props to tags
  const extendTags = useCallback(({ tags: originalTags, ...other }) => {
    const tags = originalTags.map(({ code, ...otherTags }) => ({
      ...otherTags,
      code,
      component: Link,
      href: `/explore/${code.toLowerCase()}`,
      onClick: handleCodeChange,
      shallow: true,
      underline: "none",
    }));
    return { ...other, tags };
  }, []);
  const [profile, setProfile] = useState(extendTags(profileProp));
  const fetcher = (code) => fetchProfile(apiUri, code);
  const { data, error } = useSWR(geoCode || null, fetcher);
  useEffect(() => {
    if (data) {
      setProfile(extendTags(data));
    }
  }, [data, extendTags]);

  const isLoading = geoCode && !(data || error);
  const { geography, geometries, highlights, tags } = profile;

  return (
    <div className={classes.root}>
      <Map
        center={[0.3051933453207569, 37.908818734483155]}
        zoom={6.25}
        geometries={geometries}
        geography={geography}
        onClick={handleCodeChange}
        className={classes.map}
        {...props}
      />
      <Location
        highlights={highlights}
        isLoading={isLoading}
        tags={tags}
        className={classes.location}
      />
    </div>
  );
}

ExplorePage.propTypes = {
  apiUri: PropTypes.string,
  profile: PropTypes.shape({
    geography: PropTypes.shape({}),
    geometries: PropTypes.shape({}),
    highlights: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

ExplorePage.defaultProps = {
  apiUri: undefined,
  profile: undefined,
};

export default ExplorePage;
