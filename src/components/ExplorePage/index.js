import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import fetchAPI from "@/pesayetu/utils/fetchApi";

const Map = dynamic(() => import("./Map"), { ssr: false });

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    position: "relative",
  },
}));

function ExplorePage({
  geometries: geometriesProp,
  geography: geographyProp,
  ...props
}) {
  const classes = useStyles(props);
  const [geoCode, setGeoCode] = useState(null);
  const [geometries, setGeometries] = useState(geometriesProp);
  const [geography, setGeography] = useState(geographyProp);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data } = useSWR(
    shouldFetch
      ? `${process.env.WAZIMAP_API_URL}all_details/profile/3/geography/${geoCode}/?format=json`
      : null,
    fetchAPI
  );

  useEffect(() => {
    if (data) {
      const g = data?.profile.geography;
      const geom = {
        boundary: data?.boundary,
        children: data?.children, // Dictionary keyed by child type
        parents: data?.parent_layers ?? [], // Array of parent geographies
        themes: data?.themes ?? [],
      };
      setGeometries(geom);
      setGeography(g);
    }
  }, [data]);
  return (
    <div className={classes.root}>
      <Map
        center={[0.3051933453207569, 37.908818734483155]}
        zoom={6}
        geometries={geometries}
        geography={geography}
        setShouldFetch={setShouldFetch}
        setGeoCode={setGeoCode}
      />
    </div>
  );
}

ExplorePage.propTypes = {
  center: (props, propName, componentName) => {
    const { [propName]: prop } = props;
    if (!Array.isArray(prop) || prop.length !== 2 || prop.some(Number.isNaN)) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
          ` \`${componentName}\`. Validation failed.`
      );
    }
    return null;
  },
  zoom: PropTypes.number,
  styles: PropTypes.shape({}),
  geometries: PropTypes.shape({
    parents: PropTypes.shape({}),
    children: PropTypes.shape({}),
    boundary: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
};

ExplorePage.defaultProps = {
  center: undefined,
  zoom: undefined,
  styles: {
    height: "100%",
    width: "100%",
  },
  geometries: undefined,
  geography: undefined,
};

export default ExplorePage;
