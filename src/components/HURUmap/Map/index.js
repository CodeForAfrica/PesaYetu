import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { MapContainer, ZoomControl, TileLayer, Pane } from "react-leaflet";

import Layers from "./Layers";

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles(({ palette, typography }) => ({
  map: {
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

const preferredChildrenObj = {
  country: ["county"],
};

function Map({
  center,
  zoom,
  styles,
  geometries,
  geography,
  tileLayers,
  ...props
}) {
  const classes = useStyles(props);
  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const getSelectedBoundary = (level, geoms) => {
    const preferredChildren = preferredChildrenObj[level];
    if (!preferredChildren) return null;

    const availableLevels = preferredChildren.filter((l) => geoms.children[l]);

    if (availableLevels.length > 0) {
      const preferredLevel = availableLevels[0];
      return geoms.children[preferredLevel];
    }
    return null;
  };

  useEffect(() => {
    let selectedBound =
      getSelectedBoundary(geography.level, geometries) ?? geometries.boundary;

    if (selectedBound?.type === "Feature") {
      selectedBound = {
        ...selectedBound,
        properties: {
          ...selectedBound.properties,
          selected: true,
        },
      };
    } else {
      // else its a featurecollection
      const selectedBoundaryFeatures = selectedBound?.features?.map((f) => {
        return {
          ...f,
          properties: {
            ...f.properties,
            selected: true,
          },
        };
      });

      selectedBound = {
        ...selectedBound,
        features: selectedBoundaryFeatures,
      };
    }
    setSelectedBoundary(selectedBound);
  }, [geometries, geography]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      zoomPosition="bottomright"
      scrollWheelZoom={false}
      touchZoom={false}
      zoomSnap={0.25}
      style={styles}
      className={classes.map}
    >
      {tileLayers?.map(({ pane, url, zIndex }) => (
        <Pane
          index={pane}
          name={pane}
          style={{ zIndex, pointerEvents: "none" }}
        >
          <TileLayer url={url} />
        </Pane>
      ))}
      <ZoomControl position="bottomright" />
      <Layers
        selectedBoundary={selectedBoundary}
        parentsGeometries={geometries.parents}
        {...props}
      />
    </MapContainer>
  );
}

Map.propTypes = {
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
    parents: PropTypes.arrayOf(PropTypes.shape({})),
    children: PropTypes.shape({}),
    boundary: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
  setShouldFetch: PropTypes.func,
  setGeoCode: PropTypes.func,
  tileLayers: PropTypes.arrayOf(PropTypes.shape({})),
};

Map.defaultProps = {
  center: undefined,
  zoom: undefined,
  styles: {
    height: "100%",
    width: "100%",
  },
  geometries: undefined,
  geography: undefined,
  setShouldFetch: undefined,
  setGeoCode: undefined,
  tileLayers: undefined,
};

export default Map;
