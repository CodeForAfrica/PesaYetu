import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import L from "leaflet";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap, LayerGroup, FeatureGroup, GeoJSON } from "react-leaflet";

import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";
import theme, {
  CHART_PRIMARY_COLOR_SCHEME,
  CHART_SECONDARY_COLOR_SCHEME,
} from "@/pesayetu/theme";

const useStyles = makeStyles(() => ({
  locationtag: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

const primaryGeoStyles = {
  inactive: {
    color: CHART_PRIMARY_COLOR_SCHEME[3],
    fillColor: "#f8f8f8",
    fillOpacity: 1,
    weight: 1,
  },
  hoverOnly: {
    out: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[2],
      fillOpacity: 1,
      weight: 1,
    },
    over: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[1],
      fillOpacity: 1,
    },
  },
  selected: {
    out: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[1],
      strokeWidth: 1,
      opacity: 1,
      fillOpacity: 1,
      weight: 1.5,
    },
    over: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[1],
      opacity: 1,
    },
  },
};

const secondaryGeoStyles = {
  ...primaryGeoStyles,
  hoverOnly: {
    out: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[2],
      fillOpacity: 1,
      weight: 1,
    },
    over: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[1],
      fillOpacity: 1,
    },
  },
  selected: {
    out: {
      color: CHART_PRIMARY_COLOR_SCHEME[3],
      fillColor: CHART_PRIMARY_COLOR_SCHEME[1],
      strokeWidth: 1,
      opacity: 1,
      fillOpacity: 1,
      weight: 1.5,
    },
    over: {
      color: CHART_SECONDARY_COLOR_SCHEME[3],
      fillColor: CHART_SECONDARY_COLOR_SCHEME[1],
      opacity: 1,
    },
  },
};

function Layers({
  geography,
  isPinning,
  locationCodes,
  onClick,
  parentsGeometries,
  selectedBoundary,
  ...props
}) {
  const map = useMap();
  const groupRef = useRef();
  const classes = useStyles(props);

  const onEachFeature = useCallback(
    (feature, layer) => {
      let geoStyles = primaryGeoStyles;
      if (!locationCodes?.includes(feature.properties.code)) {
        layer.setStyle(geoStyles.inactive);
      } else {
        const popUpContent = (level, name) =>
          ReactDOMServer.renderToStaticMarkup(
            <ThemeProvider theme={theme}>
              <LocationTag
                level={level}
                name={name.toLowerCase()}
                classes={{ root: classes.locationtag }}
              />
            </ThemeProvider>
          );

        layer
          .bindTooltip(
            popUpContent(feature.properties.level, feature.properties.name),
            { direction: "top", opacity: 1, className: "tooltip" }
          )
          .openTooltip();

        layer.setStyle(
          feature?.properties?.selected
            ? geoStyles.selected.out
            : geoStyles.hoverOnly.out
        );
        layer.on("mouseover", () => {
          geoStyles = isPinning ? secondaryGeoStyles : primaryGeoStyles;
          layer.setStyle(
            feature?.properties?.selected
              ? geoStyles.selected.over
              : geoStyles.hoverOnly.over
          );
        });
        layer.on("mouseout", () => {
          geoStyles = isPinning ? secondaryGeoStyles : primaryGeoStyles;
          layer.setStyle(
            feature?.properties?.selected
              ? geoStyles.selected.out
              : geoStyles.hoverOnly.out
          );
        });
        if (onClick) {
          layer.on("click", (e) => {
            const { code: featureCode } = feature.properties;
            const { code: geoCode } = geography || {};
            if (featureCode !== geoCode) {
              onClick(e, feature);
            }
          });
        }
      }
    },
    [classes.locationtag, geography, isPinning, locationCodes, onClick]
  );

  useEffect(() => {
    const layer = groupRef.current;
    if (layer) {
      layer.clearLayers();
      const featuredGeo = new L.GeoJSON(selectedBoundary, { onEachFeature });
      layer.addLayer(featuredGeo);
      map.fitBounds(layer.getBounds(), {
        animate: true,
        duration: 0.5, // in seconds
      });
    }
  }, [groupRef, selectedBoundary, map, onEachFeature]);

  return (
    <>
      <LayerGroup>
        {parentsGeometries?.map((g) => (
          <GeoJSON
            key={g.features[0].properties.name}
            data={g}
            onEachFeature={onEachFeature}
          />
        ))}
      </LayerGroup>
      <FeatureGroup ref={groupRef}>
        <GeoJSON data={selectedBoundary} onEachFeature={onEachFeature} />
      </FeatureGroup>
    </>
  );
}

Layers.propTypes = {
  geography: PropTypes.shape({ code: PropTypes.string }),
  isPinning: PropTypes.bool,
  locationCodes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  parentsGeometries: PropTypes.arrayOf(PropTypes.shape({})),
  selectedBoundary: PropTypes.shape({}),
};

Layers.defaultProps = {
  geography: undefined,
  isPinning: undefined,
  locationCodes: undefined,
  onClick: undefined,
  parentsGeometries: undefined,
  selectedBoundary: undefined,
};

export default Layers;
