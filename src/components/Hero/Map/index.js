import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import theme from "@/pesayetu/theme";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    position: "relative",
    height: typography.pxToRem(299),
    width: typography.pxToRem(236),
    marginTop: typography.pxToRem(55),
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(471),
      marginTop: typography.pxToRem(42),
      width: typography.pxToRem(371),
    },
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
      // get the the code for each county,
      // and redirect to its explore page
      // window.alert(feature.properties.code);
    });
  };

  return (
    <div className={classes.root}>
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        scrollWheelZoom={false}
        touchZoom={false}
        zoomSnap={0.25}
        style={styles}
      >
        <TileLayer {...tileLayer} />
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
