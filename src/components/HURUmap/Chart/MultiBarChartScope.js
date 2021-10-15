import { defaultConfig, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function MultiBarChartScope(
  primaryData,
  secondaryData,
  metadata,
  config,
  extra
) {
  const {
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
    height: { signal: "height" },
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
        ],
      },
    ],
    signals: [
      ...commonSignal,
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
        name: "axesNumberFormat",
        value: { percentage: percentageFormatting, value: "~s" },
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
        update: "bandspace(domain('yscale').length, 0.1, 0.05) * y_step",
      },
      ...filterSignals,
    ],
    scales: [
      {
        name: "yscale",
        type: "band",
        domain: { data: "primary_formatted", field: { signal: "mainGroup" } },
        range: { step: { signal: "y_step" } },
        padding: 0.15,
      },
      {
        name: "xscale",
        type: "linear",
        range:
          secondaryData.length > 0 && primaryData.length > 0
            ? [0, { signal: "width/2 -30 " }]
            : [0, { signal: "width" }],
        nice: true,
        zero: true,
        domain: {
          data: "primary_formatted",
          field: { signal: "datatype[Units]" },
        },
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

    axes: [
      {
        orient: "left",
        scale: "yscale",
        domainOpacity: 0.5,
        tickSize: 0,
        labelPadding: 6,
        zindex: 1,
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
        axes: [
          {
            orient: "bottom",
            scale: "xscale",
            bandPosition: 0,
            domainOpacity: 0.5,
            tickSize: 0,
            format: { signal: "axesNumberFormat[Units]" },
            grid: true,
            labelPadding: 6,
          },
        ],
        marks: [
          {
            type: "rect",
            from: { data: "primary_formatted" },
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                height: { scale: "yscale", band: 1 },
                x: {
                  scale: "xscale",
                  field: { signal: "datatype[Units]" },
                },
              },
              update: {
                fill: { value: theme.palette.primary.main },
                x: {
                  scale: "xscale",
                  field: { signal: "datatype[Units]" },
                },
                x2: { scale: "xscale", value: 0 },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
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
            x: { signal: "(width / 2 ) +30" },
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
        axes: [
          {
            orient: "bottom",
            scale: "xscale",
            bandPosition: 0,
            domainOpacity: 0.5,
            tickSize: 0,
            format: { signal: "axesNumberFormat[Units]" },
            grid: true,
            labelPadding: 6,
          },
        ],

        marks: [
          {
            type: "rect",
            from: { data: "secondary_formatted" },
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                height: { scale: "yscale", band: 1 },
                x: {
                  scale: "xscale",
                  field: { signal: "datatype[Units]" },
                },
              },
              update: {
                fill: { value: theme.palette.secondary.main },
                x: {
                  scale: "xscale",
                  field: { signal: "datatype[Units]" },
                },
                x2: { scale: "xscale", value: 0 },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
                },
              },
            },
          },
        ],
      },
    ],
  };
}
