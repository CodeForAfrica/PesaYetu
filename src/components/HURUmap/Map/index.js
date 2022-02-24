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
  geography,
  geometries,
  preferredChildren,
  styles,
  tileLayers,
  zoom,
  isPinOrCompare,
  locations,
  ...props
}) {
  const classes = useStyles(props);
  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const getSelectedBoundary = useCallback(
    (level, geoms) => {
      if (isPinOrCompare) {
        // if we are pinning/comparing do not drill down
        return geoms.boundary;
      }
      const preferredChildrenPerLevel = preferredChildren[level];
      const preferredLevel =
        preferredChildrenPerLevel?.find((l) => geoms.children[l]) ?? null;

      if (preferredLevel) {
        return geoms.children[preferredLevel];
      }
      return null;
    },
    [preferredChildren, isPinOrCompare]
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

  const locationCodes = locations?.map(({ code }) => code);

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
        geography={geography}
        parentsGeometries={geometries.parents}
        selectedBoundary={selectedBoundary}
        isPinOrCompare={isPinOrCompare}
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
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
  geometries: PropTypes.shape({
    parents: PropTypes.arrayOf(PropTypes.shape({})),
    children: PropTypes.shape({}),
    boundary: PropTypes.shape({}),
  }),
  preferredChildren: PropTypes.shape({}),
  setGeoCode: PropTypes.func,
  setShouldFetch: PropTypes.func,
  styles: PropTypes.shape({}),
  tileLayers: PropTypes.arrayOf(PropTypes.shape({})),
  zoom: PropTypes.number,
  isPinOrCompare: PropTypes.bool,
  locations: PropTypes.arrayOf(PropTypes.shape({ code: PropTypes.string })),
};

Map.defaultProps = {
  center: undefined,
  className: undefined,
  geography: undefined,
  geometries: undefined,
  preferredChildren: undefined,
  setGeoCode: undefined,
  setShouldFetch: undefined,
  styles: {
    height: "100%",
    width: "100%",
  },
  tileLayers: undefined,
  zoom: undefined,
  isPinOrCompare: undefined,
  locations: undefined,
};

export default Map;
