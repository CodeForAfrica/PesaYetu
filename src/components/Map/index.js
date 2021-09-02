import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
import useSWR from "swr";

import "leaflet/dist/leaflet.css";
import { ReactComponent as RichIcon } from "@/pesayetu/assets/icons/rich-data.svg";
import ExploreDataDialog from "@/pesayetu/components/ExploreDataDialog";
import fetchAPI from "@/pesayetu/utils/fetchApi";

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
  tileLayer,
  zoom,
  boundary,
  styles,
  geometries: geometriesProp,
  geography: geographyProp,
  population: populationProp,
  ...props
}) {
  const classes = useStyles(props);
  const router = useRouter();
  const [exploreMap, setExploreMap] = useState(null);
  const [boundaryLayers, setBoundaryLayers] = useState(null);
  const [geoCode, setGeoCode] = useState(null);
  // const [ isLoading, setIsLoading ] = useState(false);
  const [geometries, setGeometries] = useState(geometriesProp);
  const [geography, setGeography] = useState(geographyProp);

  // to test vega chart
  const [population, setPopulation] = useState(populationProp);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (e) => {
    e?.preventDefault();
    setOpenDialog(true);
  };
  const handleCloseDialog = (e) => {
    e?.preventDefault();
    setOpenDialog(false);
  };

  const { data } = useSWR(
    `https://staging.wazimap-ng.openup.org.za/api/v1/all_details/profile/8/geography/${geoCode}/?format=json`,
    fetchAPI
  );

  useEffect(() => {
    if (data) {
      const g = data?.profile.geography;
      const geom = {
        boundary: data?.boundary,
        children: data?.children, // Dictionary keyed by child type
        parents: data?.parent_layers ?? [], // Array of parent geographies
        themes: data?.themes ?? [],
      };
      setGeometries(geom);
      setGeography(g);
      setPopulation(
        data?.profile?.profile_data.Demographics?.subcategories.Population
          ?.indicators ?? null
      );
    }
  }, [data]);

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
    <div className={classes.root}>
      <MapContainer
        center={center}
        zoom={5}
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
      <div
        className={clsx(classes.button, { [classes.dialogOpen]: openDialog })}
      >
        <IconButton onClick={(e) => handleOpenDialog(e)}>
          <RichIcon />
        </IconButton>
        <ExploreDataDialog
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          data={population["Population by Gender"].data}
        />
      </div>
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
  geometries: PropTypes.shape({
    parents: PropTypes.shape({}),
    children: PropTypes.shape({}),
    boundary: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  geography: PropTypes.shape({
    level: PropTypes.string,
  }),
  population: PropTypes.shape({
    "Population by Gender": PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
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
  geometries: undefined,
  geography: undefined,
  population: undefined,
};

export default Map;
