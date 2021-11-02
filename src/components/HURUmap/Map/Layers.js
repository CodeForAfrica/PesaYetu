import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import L from "leaflet";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap, FeatureGroup, GeoJSON } from "react-leaflet";

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
      color: CHART_SECONDARY_COLOR_SCHEME[3],
      fillColor: CHART_SECONDARY_COLOR_SCHEME[1],
      fillOpacity: 1,
      opacity: 1,
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

function Layers({
  geography,
  isPinOrCompare,
  locationCodes,
  onClick,
  onClickUnpin,
  parentsGeometries,
  secondaryGeography,
  selectedBoundary,
  ...props
}) {
  const map = useMap();
  const groupRef = useRef();
  const siblingRef = useRef();
  const classes = useStyles(props);

  const pinIcon = L.divIcon({
    html: ReactDOMServer.renderToStaticMarkup(
      <ThemeProvider theme={theme}>
        <LocationTag
          level={geography?.level}
          name={geography?.name?.toLowerCase()}
          code={geography?.code}
          classes={{ root: classes.locationtag }}
          color="primary"
          variant="marker"
        />
      </ThemeProvider>
    ),
  });

  const onEachFeature = useCallback(
    (feature, layer) => {
      let geoStyles =
        isPinOrCompare && feature.properties.code === secondaryGeography?.code
          ? secondaryGeoStyles
          : primaryGeoStyles;
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
                color={isPinOrCompare ? "secondary" : "primary"}
              />
            </ThemeProvider>
          );

        if (!(isPinOrCompare && feature.properties.code === geography?.code)) {
          layer
            .bindTooltip(
              popUpContent(feature.properties.level, feature.properties.name),
              { direction: "top", opacity: 1, className: "tooltip" }
            )
            .openTooltip();
        }

        let style;
        if (feature?.properties?.selected) {
          style = geoStyles.selected.out;
        } else if (
          isPinOrCompare &&
          feature.properties.code === secondaryGeography?.code
        ) {
          style = geoStyles.hoverOnly.over;
        } else {
          style = geoStyles.hoverOnly.out;
        }
        layer.setStyle(style);

        layer.on("mouseover", () => {
          geoStyles = isPinOrCompare ? secondaryGeoStyles : primaryGeoStyles;
          layer.setStyle(
            feature?.properties?.selected
              ? geoStyles.selected.over
              : geoStyles.hoverOnly.over
          );
        });
        layer.on("mouseout", () => {
          geoStyles = isPinOrCompare ? secondaryGeoStyles : primaryGeoStyles;
          let outStyle;
          if (feature?.properties?.selected) {
            outStyle = geoStyles.selected.out;
          } else if (
            isPinOrCompare &&
            feature.properties.code === secondaryGeography?.code
          ) {
            outStyle = geoStyles.hoverOnly.over;
          } else {
            outStyle = geoStyles.hoverOnly.out;
          }
          layer.setStyle(outStyle);
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
    [
      classes.locationtag,
      geography,
      isPinOrCompare,
      secondaryGeography,
      locationCodes,
      onClick,
    ]
  );

  useEffect(() => {
    const layer = groupRef.current;
    const otherLayers = siblingRef.current;
    if (otherLayers) {
      otherLayers.clearLayers();
      const siblings = new L.GeoJSON(parentsGeometries, {
        onEachFeature,
      });
      otherLayers.addLayer(siblings);
      if (isPinOrCompare) {
        map.fitBounds(otherLayers.getBounds(), {
          animate: true,
          duration: 0.5, // in seconds
        });
      }
    }

    if (layer) {
      layer.clearLayers();
      const featuredGeo = new L.GeoJSON(selectedBoundary, {
        onEachFeature,
      });
      layer.addLayer(featuredGeo);
      if (!isPinOrCompare) {
        map.fitBounds(layer.getBounds(), {
          animate: true,
          duration: 0.5, // in seconds
        });
      } else {
        const mark = new L.Marker(layer.getBounds().getCenter(), {
          icon: pinIcon,
        });
        mark.on("click", () => {
          onClickUnpin(geography.code);
        });
        mark.addTo(layer);
      }
    }
  }, [
    groupRef,
    siblingRef,
    onClickUnpin,
    geography.code,
    pinIcon,
    selectedBoundary,
    map,
    onEachFeature,
    parentsGeometries,
    isPinOrCompare,
  ]);

  return (
    <>
      <FeatureGroup ref={siblingRef}>
        <GeoJSON data={parentsGeometries} onEachFeature={onEachFeature} />
      </FeatureGroup>
      <FeatureGroup ref={groupRef}>
        <GeoJSON data={selectedBoundary} onEachFeature={onEachFeature} />
      </FeatureGroup>
    </>
  );
}

Layers.propTypes = {
  geography: PropTypes.shape({
    code: PropTypes.string,
    level: PropTypes.string,
    name: PropTypes.string,
  }),
  isPinOrCompare: PropTypes.bool,
  locationCodes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onClickUnpin: PropTypes.func,
  parentsGeometries: PropTypes.arrayOf(PropTypes.shape({})),
  secondaryGeography: PropTypes.shape({
    code: PropTypes.string,
  }),
  selectedBoundary: PropTypes.shape({}),
};

Layers.defaultProps = {
  geography: undefined,
  isPinOrCompare: undefined,
  locationCodes: undefined,
  onClick: undefined,
  onClickUnpin: undefined,
  parentsGeometries: undefined,
  secondaryGeography: undefined,
  selectedBoundary: undefined,
};

export default Layers;
