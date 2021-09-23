import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, ZoomControl, TileLayer, Pane } from "react-leaflet";

import Layers from "./Layers";

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    "& .tooltip": {
      height: typography.pxToRem(38),
      width: typography.pxToRem(88),
      position: "relative",
    },
  },
}));

function Map({
  center,
  className,
  zoom,
  styles,
  geometries,
  geography,
  tileLayers,
  preferredChildren,
  featuredGeographies,
  ...props
}) {
  const classes = useStyles(props);
  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const getSelectedBoundary = useCallback(
    (level, geoms) => {
      const preferredLevelChildren = preferredChildren[level];
      if (!preferredLevelChildren) return null;

      const availableLevels = preferredLevelChildren.filter(
        (l) => geoms.children[l]
      );

      if (availableLevels.length > 0) {
        const preferredLevel = availableLevels[0];
        return geoms.children[preferredLevel];
      }
      return null;
    },
    [preferredChildren]
  );

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
      // else its a FeatureCollection
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
  }, [geometries, geography, getSelectedBoundary]);

  const locationCodes = Object.keys(featuredGeographies).reduce((acc, v) => {
    return acc.concat(featuredGeographies[v]);
  }, []);

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
      className={clsx(classes.root, className)}
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
        {...props}
        selectedBoundary={selectedBoundary}
        parentsGeometries={geometries.parents}
        locationCodes={locationCodes}
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
  className: PropTypes.string,
  zoom: PropTypes.number,
  styles: PropTypes.shape({}),
  geometries: PropTypes.shape({
    parents: PropTypes.arrayOf(PropTypes.shape({})),
    children: PropTypes.shape({}),
    boundary: PropTypes.shape({}),
  }),
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
  setShouldFetch: PropTypes.func,
  setGeoCode: PropTypes.func,
  tileLayers: PropTypes.arrayOf(PropTypes.shape({})),
  preferredChildren: PropTypes.shape({}),
  featuredGeographies: PropTypes.shape({}),
};

Map.defaultProps = {
  center: undefined,
  className: undefined,
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
  preferredChildren: undefined,
  featuredGeographies: undefined,
};

export default Map;
