import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { MapContainer, ZoomControl, TileLayer, Pane } from "react-leaflet";

import Layers from "./Layers";

import "leaflet/dist/leaflet.css";

const preferredChildrenObj = {
  country: ["county"],
};

function ExploreMap({ center, zoom, styles, geometries, geography, ...props }) {
  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const getSelectedBoundary = (level, geoms) => {
    const preferredChildren = preferredChildrenObj[level];
    if (!preferredChildren) return null;

    const availableLevels = preferredChildren.filter(
      (l) => geoms.children[l] !== undefined
    );

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
    >
      <Pane name="tiles" style={{ zIndex: 200, pointerEvents: "none" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png" />
      </Pane>
      <Pane name="labelsPane" style={{ zIndex: 650, pointerEvents: "none" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png" />
      </Pane>
      <ZoomControl position="bottomright" />
      <Layers
        selectedBoundary={selectedBoundary}
        parentsGeometries={geometries.parents}
        {...props}
      />
    </MapContainer>
  );
}

ExploreMap.propTypes = {
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
  setShouldFetch: PropTypes.func,
  setGeoCode: PropTypes.func,
};

ExploreMap.defaultProps = {
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
};

export default ExploreMap;
