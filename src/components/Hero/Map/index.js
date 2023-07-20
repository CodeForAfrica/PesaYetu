import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

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
    "& .leaflet-container": {
      background: "transparent",
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
  zoom,
  boundary,
  styles,
  geoJSONStyles,
  setHoverGeo,
  featuredCounties,
  ...props
}) {
  const classes = useStyles(props);
  const router = useRouter();

  const countyCodes = featuredCounties?.map(({ code }) => code);

  const onEachFeature = (feature, layer) => {
    layer.setStyle({
      fillColor: theme.palette.background.default,
      fillOpacity: 1,
    });

    if (countyCodes.includes(feature.properties.code)) {
      layer.setStyle({
        weight: 1.5,
        dashArray: 0,
      });
      layer.on("mouseover", () => {
        setHoverGeo(feature.properties.name.toLowerCase());
        layer.setStyle({
          fillColor: theme.palette.primary.main,
          fillOpacity: 0.5,
        });
      });
      layer.on("mouseout", () => {
        setHoverGeo(null);
        layer.setStyle({
          fillOpacity: 1,
          fillColor: theme.palette.background.default,
        });
      });
      layer.on("click", () => {
        router.push(`/explore/${feature.properties.code.toLowerCase()}`);
      });
    }
  };

  return (
    <div className={classes.root}>
      <MapContainer
        center={center}
        zoom={zoom}
        boxZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        touchZoom={false}
        trackResize={false}
        zoomSnap={0.25}
        style={styles}
      >
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
  zoom: PropTypes.number,
  styles: PropTypes.shape({}),
  boundary: PropTypes.shape({}),
  geoJSONStyles: PropTypes.shape({}),
  setHoverGeo: PropTypes.func,
  featuredCounties: PropTypes.arrayOf(
    PropTypes.shape({ code: PropTypes.string })
  ),
};

Map.defaultProps = {
  boundary: undefined,
  center: undefined,
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
    dashArray: "2",
  },
  setHoverGeo: undefined,
  featuredCounties: undefined,
};

export default Map;
