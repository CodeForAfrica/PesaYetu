import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Pane } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import theme from "@/pesayetu/theme";

const useStyles = makeStyles(({ typography }) => ({
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
}));

function Map({
  center,
  tileLayer,
  zoom,
  boundary,
  styles,
  geoJSONStyles,
  ...props
}) {
  const classes = useStyles(props);
  const mapRef = useRef();
  const router = useRouter();

  const onEachFeature = (feature, layer) => {
    layer
      .bindTooltip(feature.properties.name.toString(), {
        className: classes.tooltip,
      })
      .openTooltip();
    layer.on("mouseover", () => {
      layer.setStyle({
        fillColor: theme.palette.primary.main,
        fillOpacity: 0.5,
      });
    });
    layer.on("mouseout", () => {
      layer.setStyle({
        opacity: 1,
        fillColor: theme.palette.background.default,
      });
    });
    layer.on("click", () => {
      const href = `/explore/${feature.properties.level}-${feature.properties.code}`;
      router.push(href, href, { shallow: true });
      const map = mapRef.current;
      map.flyToBounds(layer.getBounds(), {
        animate: true,
        duration: 0.5, // in seconds
      });
    });
  };

  return (
    <div className={classes.root}>
      <MapContainer
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        center={center}
        zoom={zoom}
        zoomControl
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
        <GeoJSON
          data={boundary}
          style={geoJSONStyles}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
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
  tileLayer: PropTypes.shape({}),
  zoom: PropTypes.number,
  styles: PropTypes.shape({}),
  boundary: PropTypes.shape({}),
  geoJSONStyles: PropTypes.shape({}),
};

Map.defaultProps = {
  boundary: undefined,
  center: undefined,
  tileLayer: undefined,
  zoom: undefined,
  styles: {
    height: "100%",
    width: "100%",
  },
  geoJSONStyles: {
    color: "#2A2A2C",
    weight: 1,
    opacity: 1,
    fillColor: "#fff",
  },
};

export default Map;
