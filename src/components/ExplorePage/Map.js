import { makeStyles } from "@material-ui/core/styles";
import L from "leaflet";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";
import {
  MapContainer,
  MapConsumer,
  ZoomControl,
  TileLayer,
  Pane,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    height: "100vh",
    position: "relative",
  },
  tooltip: {
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.pxToRem(13),
    color: "#2A2A2C",
    textTransform: "capitalize",
  },
  button: {
    position: "absolute",
    top: 0,
    zIndex: 800,
    background: palette.background.default,
  },
  dialogOpen: {
    left: typography.pxToRem(420),
  },
}));

const geoStyles = {
  hoverOnly: {
    over: {
      fillColor: "#3BAD84",
    },
    out: {
      fillColor: "#ffffff",
      stroke: false,
    },
  },
  selected: {
    over: {
      color: "#666666",
      fillColor: "#3BAD84",
      opacity: 1,
    },
    out: {
      color: "#666666",
      fillColor: "#cccccc",

      opacity: 0.5,
      fillOpacity: 0.5,

      weight: 1,
    },
  },
};

const preferredChildrenObj = {
  country: ["province"],
  province: ["Districts and Metros"],
  district: ["municipality"],
  municipality: ["mainplace", "planning_region", "ward"],
  mainplace: ["subplace"],
};

function Map({
  center,
  zoom,
  styles,
  geometries,
  geography,
  setShouldFetch,
  setGeoCode,
  ...props
}) {
  const classes = useStyles(props);
  const router = useRouter();
  const [exploreMap, setExploreMap] = useState(null);
  const [boundaryLayers, setBoundaryLayers] = useState(null);

  const onEachFeature = useCallback(
    (feature, layer) => {
      if (feature.properties?.selected) {
        layer.setStyle(geoStyles.selected.out);
      } else {
        layer.setStyle(geoStyles.hoverOnly.out);
      }

      layer
        .bindTooltip(feature.properties.name.toString(), {
          className: classes.tooltip,
        })
        .openTooltip();
      layer.on("mouseover", () => {
        if (feature.properties?.selected) {
          layer.setStyle(geoStyles.selected.over);
        } else {
          layer.setStyle(geoStyles.hoverOnly.over);
        }
      });
      layer.on("mouseout", () => {
        if (feature.properties?.selected) {
          layer.setStyle(geoStyles.selected.out);
        } else {
          layer.setStyle(geoStyles.hoverOnly.out);
        }
      });
      layer.on("click", () => {
        setGeoCode(feature.properties.code);
        setShouldFetch(true);
        const href = `/explore/${feature.properties.level}-${feature.properties.code}`;
        router.push(href, href, { shallow: true });
        exploreMap.flyToBounds(layer.getBounds(), {
          animate: true,
          duration: 0.5, // in seconds
        });
      });
    },
    [router, exploreMap, classes.tooltip]
  );

  const getSelectedBoundary = (level, geoms) => {
    const preferredChildren = preferredChildrenObj[level];
    if (preferredChildren === null) return null;

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
    if (exploreMap) {
      const bl = new L.LayerGroup().addTo(exploreMap);
      setBoundaryLayers(bl);
    }
  }, [exploreMap]);

  useEffect(() => {
    let selectedBoundary =
      getSelectedBoundary(geography.level, geometries) ?? geometries.boundary;

    if (selectedBoundary?.type === "Feature") {
      selectedBoundary = {
        ...selectedBoundary,
        properties: {
          ...selectedBoundary.properties,
          selected: true,
        },
      };
    } else {
      // else its a featurecollection
      const selectedBoundaryFeatures = selectedBoundary?.features?.map((f) => {
        return {
          ...f,
          properties: {
            ...f.properties,
            selected: true,
          },
        };
      });

      selectedBoundary = {
        ...selectedBoundary,
        features: selectedBoundaryFeatures,
      };
    }
    if (exploreMap && boundaryLayers) {
      boundaryLayers.clearLayers();
      const newGeoJSONLayer = new L.GeoJSON(
        [selectedBoundary, ...geometries.parents],
        { onEachFeature }
      );
      boundaryLayers.addLayer(newGeoJSONLayer);
    }
  }, [geometries, geography, onEachFeature, exploreMap, boundaryLayers]);

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
      <MapConsumer>
        {(map) => {
          setExploreMap(map);
          return null;
        }}
      </MapConsumer>
      <Pane name="tiles" style={{ zIndex: 200, pointerEvents: "none" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png" />
      </Pane>
      <Pane name="labelsPane" style={{ zIndex: 650, pointerEvents: "none" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png" />
      </Pane>
      <ZoomControl position="bottomright" />
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
};

export default Map;
