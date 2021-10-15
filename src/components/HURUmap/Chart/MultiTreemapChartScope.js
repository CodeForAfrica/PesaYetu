import { xAxis, defaultConfig, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function TreemapChartScope(
  primaryData,
  secondaryData,
  metadata,
  config,
  extra
) {
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
    nest_fields: nestFields,
  } = config;

  const { primary_group: primaryGroup } = metadata;

  const nestedFields = nestFields || [primaryGroup]; // if nest fields are undefined, make use primaryGroup

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
    height: 380,
    data: [
      {
        name: "primary",
        values: primaryData,
        transform: [...filters],
      },
      {
        name: "secondary",
        values: secondaryData,
        transform: [...filters],
      },
      {
        name: "primary_formatted",
        source: "primary",
        transform: [
          {
            type: "aggregate",
            ops: ["sum"],
            as: ["count"],
            fields: ["count"],
            groupby: { signal: "groups" },
          },
          {
            type: "joinaggregate",
            as: ["TotalCount"],
            ops: ["sum"],
            fields: ["count"],
          },
          {
            type: "formula",
            expr: "datum.count/datum.TotalCount",
            as: "percentage",
          },
          {
            type: "extent",
            field: "percentage",
            signal: "primary_percentage_extent",
          },
          {
            type: "extent",
            field: "count",
            signal: "primary_value_extent",
          },
          {
            type: "nest",
            keys: nestedFields,
          },
          {
            type: "treemap",
            field: { signal: "datatype[Units]" },
            method: { signal: "layout" },
            ratio: { signal: "aspectRatio" },
            size: [
              {
                signal:
                  secondaryData.length > 0 && primaryData.length > 0
                    ? "width/2 -30"
                    : "width",
              },
              { signal: "height" },
            ],
          },
        ],
      },
      {
        name: "secondary_formatted",
        source: "secondary",
        transform: [
          {
            type: "aggregate",
            ops: ["sum"],
            as: ["count"],
            fields: ["count"],
            groupby: { signal: "groups" },
          },
          {
            type: "joinaggregate",
            as: ["TotalCount"],
            ops: ["sum"],
            fields: ["count"],
          },
          {
            type: "formula",
            expr: "datum.count/datum.TotalCount",
            as: "percentage",
          },
          {
            type: "extent",
            field: "percentage",
            signal: "secondary_percentage_extent",
          },
          {
            type: "extent",
            field: "count",
            signal: "secondary_value_extent",
          },
          {
            type: "nest",
            keys: nestedFields,
          },
          {
            type: "treemap",
            field: { signal: "datatype[Units]" },
            method: { signal: "layout" },
            ratio: { signal: "aspectRatio" },
            size: [{ signal: "width" }, { signal: "height" }],
          },
        ],
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
        value: nestedFields,
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
        value: nestedFields[0],
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
        domain: { data: "primary_formatted", field: { signal: "mainGroup" } },
        range: [theme.palette.primary.main],
      },
      {
        name: "secondary",
        type: "ordinal",
        domain: { data: "primary_formatted", field: { signal: "mainGroup" } },
        range: [theme.palette.secondary.main],
      },
      {
        name: "legend_primary_scale",
        type: "ordinal",
        domain: [extra.primary.toUpperCase()],
        range: [theme.palette.primary.main],
      },
      {
        name: "legend_secondary_scale",
        type: "ordinal",
        domain: [extra.secondary.toUpperCase()],
        range: [theme.palette.secondary.main],
      },
    ],

    marks: [
      {
        type: "group",
        name: "primary_bars",
        encode: {
          update: {
            x: { value: 0 },
            height: { signal: "height" },
          },
        },
        legends: [
          {
            orient: "top",
            fill: "legend_primary_scale",
            labelFontWeight: "bold",
            labelColor: "#666",
            labelFont: theme.typography.fontFamily,
          },
        ],

        marks: [
          {
            type: "rect",
            from: { data: "primary_formatted" },
            encode: {
              enter: {
                fill: { scale: "color", field: { signal: "mainGroup" } },
                stroke: { value: "#fff" },
              },
              update: {
                x: { field: "x0" },
                y: { field: "y0" },
                x2: { field: "x1" },
                y2: { field: "y1" },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
                },
              },
            },
          },
          {
            type: "text",
            from: { data: "primary_formatted" },
            encode: {
              enter: {
                font: { value: theme.typography.fontFamily },
                align: { value: "top" },
                baseline: { value: "left" },
                fill: { value: theme.palette.text.secondary },
              },
              update: {
                align: { value: "top" },
                baseline: { value: "left" },
                x: { signal: "datum.x0 + 15" },
                y: { signal: "datum.y0 + 20" },
                text: {
                  signal:
                    "[format(datum[datatype[Units]], numberFormat[Units]), datum[mainGroup]]",
                },
              },
            },
          },
        ],
      },
      {
        type: "group",
        name: "secondary_bars",
        encode: {
          update: {
            x:
              secondaryData.length > 0 && primaryData.length > 0
                ? [{ signal: "width / 2 +30" }]
                : [0],
            height: { signal: "height" },
          },
        },
        legends: [
          {
            orient: "top",
            fill: "legend_secondary_scale",
            labelFontWeight: "bold",
            labelColor: "#666",
            labelFont: theme.typography.fontFamily,
          },
        ],
        marks: [
          {
            type: "rect",
            from: { data: "primary_formatted" },
            encode: {
              enter: {
                fill: { scale: "secondary", field: { signal: "mainGroup" } },
                stroke: { value: "#fff" },
              },
              update: {
                x: { field: "x0" },
                y: { field: "y0" },
                x2: { field: "x1" },
                y2: { field: "y1" },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
                },
              },
            },
          },
          {
            type: "text",
            from: { data: "primary_formatted" },
            encode: {
              enter: {
                font: { value: theme.typography.fontFamily },
                align: { value: "top" },
                baseline: { value: "left" },
                fill: { value: theme.palette.text.secondary },
              },
              update: {
                align: { value: "top" },
                baseline: { value: "left" },
                x: { signal: "datum.x0 + 15" },
                y: { signal: "datum.y0 + 20" },
                text: {
                  signal:
                    "[format(datum[datatype[Units]], numberFormat[Units]), datum[mainGroup]]",
                },
              },
            },
          },
        ],
      },
    ],
  };
}
