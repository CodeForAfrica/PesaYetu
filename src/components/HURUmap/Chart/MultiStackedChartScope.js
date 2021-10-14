import { defaultConfig, xAxis, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function MultiStackedChartScope(
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
      Value: { minX: valueMinX, maxX: valueMaxX },
      Percentage: {
        formatting: percentageFormatting,
        minX: percentageMinX,
        maxX: percentageMaxX,
      },
    },
    stacked_field: stackedField,
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
    autosize: { type: "fit-x", contains: "padding" },
    padding: 5,
    width: { signal: "width" },
    height: { signal: "height" },
    config: defaultConfig,
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
            type: "stack",
            groupby: [primaryGroup],
            field: { signal: "datatype[Units]" },
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
            type: "stack",
            groupby: [primaryGroup],
            field: { signal: "datatype[Units]" },
          },
        ],
      },
    ],
    signals: [
      ...commonSignal,
      {
        name: "groups",
        value: [primaryGroup, stackedField],
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
        name: "stackedField",
        value: stackedField,
      },
      {
        name: "numberFormat",
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
        domain: { data: "primary_formatted", field: "y1" },
        domainMin: { signal: "domainMin" },
        domainMax: { signal: "domainMax" },
        range: [0, { signal: "width/2 -30 " }],
        zero: true,
        clamp: true,
        nice: true,
      },
      {
        name: "color",
        type: "ordinal",
        range: "category",
        domain: {
          data: "primary_formatted",
          field: stackedField,
        },
      },
      {
        name: "secondary",
        type: "ordinal",
        range: "secondary",
        domain: {
          data: "secondary_formatted",
          field: stackedField,
        },
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
            fill: "color",
            orient: "top",
            direction: "horizontal",
            strokeColor: "transparent",
            title: extra.primary.toUpperCase(),
            titleFontWeight: "bold",
            titleColor: "#666",
            titleFont: theme.typography.fontFamily,
            labelFont: theme.typography.fontFamily,
            encode: {
              labels: {
                interactive: true,
                update: {
                  fontSize: { value: 11 },
                  fill: { value: theme.palette.chart.text.primary },
                },
              },
              symbols: {
                update: {
                  stroke: { value: "transparent" },
                },
              },
            },
          },
        ],

        axes: [
          {
            orient: "bottom",
            scale: "xscale",
            bandPosition: 0,
            domainOpacity: 0.5,
            tickSize: 0,
            format: { signal: "numberFormat[Units]" },
            grid: true,
            labelPadding: 6,
          },
        ],
        marks: [
          {
            name: "bars",
            from: { data: "primary_formatted" },
            type: "rect",
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                height: { scale: "yscale", band: 1 },
                x: { scale: "xscale", field: "y0" },
                x2: { scale: "xscale", field: "y1" },
                fill: { scale: "color", field: stackedField },
              },
              update: {
                fillOpacity: { value: 1 },
                x: { scale: "xscale", field: "y0" },
                x2: { scale: "xscale", field: "y1" },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value), 'stack': datum[stackedField]}",
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
            x: { signal: "width / 2  +30" },
            height: { signal: "height" },
          },
        },
        legends: [
          {
            fill: "secondary",
            orient: "top",
            direction: "horizontal",
            strokeColor: "transparent",
            title: extra.secondary.toUpperCase(),
            titleFontWeight: "bold",
            titleColor: "#666",
            titleFont: theme.typography.fontFamily,
            labelFont: theme.typography.fontFamily,
            encode: {
              labels: {
                interactive: true,
                update: {
                  fontSize: { value: 11 },
                  fill: { value: theme.palette.chart.text.primary },
                },
              },
              symbols: {
                update: {
                  stroke: { value: "transparent" },
                },
              },
            },
          },
        ],
        axes: [
          {
            orient: "bottom",
            scale: "xscale",
            bandPosition: 0,
            domainOpacity: 0.5,
            tickSize: 0,
            format: { signal: "numberFormat[Units]" },
            grid: true,
            labelPadding: 6,
          },
        ],

        marks: [
          {
            name: "bars",
            from: { data: "primary_formatted" },
            type: "rect",
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                height: { scale: "yscale", band: 1 },
                x: { scale: "xscale", field: "y0" },
                x2: { scale: "xscale", field: "y1" },
                fill: { scale: "secondary", field: stackedField },
              },
              update: {
                fillOpacity: { value: 1 },
                x: { scale: "xscale", field: "y0" },
                x2: { scale: "xscale", field: "y1" },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value), 'stack': datum[stackedField]}",
                },
              },
            },
          },
        ],
      },
    ],
  };
}
