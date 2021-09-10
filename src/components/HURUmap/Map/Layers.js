import { makeStyles } from "@material-ui/core/styles";
import L from "leaflet";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useMap, LayerGroup, FeatureGroup, GeoJSON } from "react-leaflet";

const useStyles = makeStyles(({ typography }) => ({
  tooltip: {
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.pxToRem(13),
    color: "#2A2A2C",
    textTransform: "capitalize",
  },
}));

const geoStyles = {
  inactive: {
    fillColor: "#f8f8f8",
    fillOpacity: 1,
    color: "#666666",
    weight: 1,
  },
  hoverOnly: {
    over: {
      fillColor: "#7DB2D3",
      fillOpacity: 1,
      color: "#666666",
    },
    out: {
      fillColor: "#DFDFDF",
      fillOpacity: 1,
      color: "#666666",
      weight: 1,
    },
  },
  selected: {
    over: {
      color: "#666666",
      fillColor: "#7DB2D3",
      opacity: 1,
    },
    out: {
      color: "#666666",
      fillColor: "#7DB2D3",
      strokeWidth: 1,
      opacity: 1,
      fillOpacity: 1,

      weight: 1.5,
    },
  },
};

const Layers = ({
  selectedBoundary,
  parentsGeometries,
  setGeoCode,
  setShouldFetch,
  ...props
}) => {
  const classes = useStyles(props);
  const map = useMap();
  const router = useRouter();
  const groupRef = useRef();

  const featuredCountiesCode =
    process.env.NEXT_PUBLIC_FEATURED_COUNTIES?.split(",");
  const onEachFeature = (feature, layer) => {
    if (!featuredCountiesCode?.includes(feature.properties.code)) {
      layer.setStyle(geoStyles.inactive);
    } else {
      layer
        .bindTooltip(feature.properties.name.toString(), {
          className: classes.tooltip,
        })
        .openTooltip();

      layer.setStyle(
        feature?.properties?.selected
          ? geoStyles.selected.out
          : geoStyles.hoverOnly.out
      );
      layer.on("mouseover", () => {
        layer.setStyle(
          feature?.properties?.selected
            ? geoStyles.selected.over
            : geoStyles.hoverOnly.over
        );
      });
      layer.on("mouseout", () => {
        layer.setStyle(
          feature?.properties?.selected
            ? geoStyles.selected.out
            : geoStyles.hoverOnly.out
        );
      });
      layer.on("click", () => {
        setGeoCode(feature.properties.code);
        setShouldFetch(true);
        const href = `/explore/${feature.properties.level}-${feature.properties.code}`;
        router.push(href, href, { shallow: true });
      });
    }
  };

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
  }, [groupRef, selectedBoundary]);

  return (
    <>
      <LayerGroup>
        {parentsGeometries?.map((g) => (
          <GeoJSON data={g} onEachFeature={onEachFeature} />
        ))}
      </LayerGroup>
      <FeatureGroup ref={groupRef}>
        <GeoJSON data={selectedBoundary} onEachFeature={onEachFeature} />
      </FeatureGroup>
    </>
  );
};

Layers.propTypes = {
  parentsGeometries: PropTypes.arrayOf(PropTypes.shape({})),
  selectedBoundary: PropTypes.shape({}),
  setGeoCode: PropTypes.func,
  setShouldFetch: PropTypes.func,
};

Layers.defaultProps = {
  parentsGeometries: undefined,
  selectedBoundary: undefined,
  setGeoCode: undefined,
  setShouldFetch: undefined,
};

export default Layers;
