import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import fetchJson from "@/pesayetu/utils/fetchJson";

const Map = dynamic(() => import("@/pesayetu/components/HURUmap/Map"), {
  ssr: false,
});

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
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
        fontWeight: "bold",
        color: palette.text.secondary,
        background: palette.primary.main,
        textTransform: "upperCase",
        fontSize: typography.pxToRem(7),
        marginTop: typography.pxToRem(-15),
        borderRadius: typography.pxToRem(4),
        paddingTop: typography.pxToRem(2),
        width: typography.pxToRem(62),
        height: typography.pxToRem(17),
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      },
      "& .name": {
        textAlign: "center",
        fontSize: typography.pxToRem(9),
        fontWeight: "bold",
        textTransform: "capitalize",
        marginTop: typography.pxToRem(5),
      },
    },
  },
}));

function ExplorePage({
  geometries: geometriesProp,
  geography: geographyProp,
  apiUri,
  ...props
}) {
  const classes = useStyles(props);
  const [geoCode, setGeoCode] = useState(null);
  const [geometries, setGeometries] = useState(geometriesProp);
  const [geography, setGeography] = useState(geographyProp);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data } = useSWR(
    shouldFetch
      ? `${apiUri}all_details/profile/1/geography/${geoCode}/?format=json`
      : null,
    fetchJson
  );

  useEffect(() => {
    if (data) {
      const g = data.profile.geography;
      const geom = {
        boundary: data.boundary,
        children: data.children, // Dictionary keyed by child type
        parents: data.parent_layers ?? [], // Array of parent geographies
        themes: data.themes ?? [],
      };
      setGeometries(geom);
      setGeography(g);
    }
  }, [data]);
  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Map
          center={[0.3051933453207569, 37.908818734483155]}
          zoom={6.25}
          geometries={geometries}
          geography={geography}
          setShouldFetch={setShouldFetch}
          setGeoCode={setGeoCode}
        />
      </Hidden>
    </div>
  );
}

ExplorePage.propTypes = {
  geometries: PropTypes.shape({
    parents: PropTypes.shape({}),
    children: PropTypes.shape({}),
    boundary: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
  apiUri: PropTypes.string,
};

ExplorePage.defaultProps = {
  geometries: undefined,
  geography: undefined,
  apiUri: undefined,
};

export default ExplorePage;
