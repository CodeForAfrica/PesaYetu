import { xAxis, defaultConfig, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function TreemapChartScope(data, metadata, config) {
  const {
    xTicks,
    defaultType,
    types: {
      Value: { formatting: valueFormatting, minX: valueMinX, maxX: valueMaxX },
      Percentage: {
        formatting: percentageFormatting,
        minX: percentageMinX,
        maxX: percentageMaxX,
      },
    },
  } = config;

  const { primary_group: primaryGroup } = metadata;

  if (xTicks) {
    xAxis.tickCount = xTicks;
  }

  const { signals: filterSignals, filters } = createFiltersForGroups(
    metadata.groups
  );

  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A",
    config: defaultConfig,
    autosize: { type: "fit-x", contains: "padding" },
    padding: 5,
    width: { signal: "width" },
    height: 360,
    data: [
      {
        name: "table",
        values: data,
        transform: [...filters],
      },
      {
        name: "data_formatted",
        source: "table",
        transform: [
          {
            type: "stratify",
            key: "id",
            parentKey: "parent",
          },
          {
            type: "treemap",
            field: "size",
            sort: { field: "value" },
            round: true,
            method: { signal: "layout" },
            ratio: { signal: "aspectRatio" },
            size: [{ signal: "width" }, { signal: "height" }],
          },
          {
            type: "formula",
            as: "custom_label",
            expr: "datum.name + ' ' + datum.size",
          },
        ],
      },
      {
        name: "nodes",
        source: "data_formatted",
        transform: [
          {
            type: "filter",
            expr: "datum.children",
          },
        ],
      },
      {
        name: "leaves",
        source: "data_formatted",
        transform: [{ type: "filter", expr: "!datum.children" }],
      },
    ],
    signals: [
      ...commonSignal,
      {
        name: "layout",
        value: "squarify",
      },
      {
        name: "aspectRatio",
        value: 1.6,
      },
      {
        name: "groups",
        value: [primaryGroup],
      },
      {
        name: "barvalue",
        value: "datum",
      },
      {
        name: "Units",
        value: graphValueTypes[defaultType],
      },
      {
        name: "applyFilter",
        value: false,
      },
      {
        name: "filterIndicator",
      },
      {
        name: "filterValue",
      },
      {
        name: "mainGroup",
        value: primaryGroup,
      },
      {
        name: "numberFormat",
        value: { percentage: percentageFormatting, value: valueFormatting },
      },
      {
        name: "datatype",
        value: { percentage: "percentage", value: "count" },
      },
      {
        name: "percentageMaxX",
        value: percentageMaxX !== "default" ? percentageMaxX : undefined,
      },
      {
        name: "percentageMinX",
        value: percentageMinX !== "default" ? percentageMinX : undefined,
      },
      {
        name: "valueMaxX",
        value: valueMaxX !== "default" ? valueMaxX : undefined,
      },
      {
        name: "valueMinX",
        value: valueMinX !== "default" ? valueMinX : undefined,
      },
      {
        name: "domainMin",
        update: "Units === 'percentage' ? percentageMinX : valueMinX",
      },
      {
        name: "domainMax",
        update: "Units === 'percentage' ? percentageMaxX : valueMaxX",
      },
      {
        name: "height",
        value: 310,
      },
      ...filterSignals,
    ],
    scales: [
      {
        name: "color",
        type: "ordinal",
        domain: { data: "nodes", field: "name" },
        range: "category",
      },
      {
        name: "size",
        type: "ordinal",
      },
      {
        name: "opacity",
        type: "ordinal",
      },
    ],

    marks: [
      {
        type: "rect",
        from: { data: "nodes" },
        interactive: false,
        encode: {
          enter: {
            fill: { scale: "color", field: "name" },
          },
          update: {
            x: { field: "x0" },
            y: { field: "y0" },
            x2: { field: "x1" },
            y2: { field: "y1" },
          },
        },
      },
      {
        type: "rect",
        from: { data: "leaves" },
        encode: {
          enter: {
            stroke: { value: "#fff" },
          },
          update: {
            x: { field: "x0" },
            y: { field: "y0" },
            x2: { field: "x1" },
            y2: { field: "y1" },
            fill: { value: theme.palette.primary.main },
          },
          hover: {
            fill: { value: theme.palette.primary.main },
          },
        },
      },
      {
        type: "text",
        from: { data: "leaves" },
        interactive: false,
        encode: {
          enter: {
            font: { value: theme.typography.fontFamily },
            align: { value: "left" },
            baseline: { value: "line-top" },
            fill: { value: theme.palette.text.secondary },
            text: { field: "custom_label" },
            fontSize: { scale: "size", field: "depth" },
            fillOpacity: { scale: "opacity", field: "depth" },
          },
          update: {
            x: { signal: "0.5 * (datum.x0 + datum.x1)" },
            y: { signal: "0.5 * (datum.y0 + datum.y1)" },
          },
        },
      },
    ],
  };
}
