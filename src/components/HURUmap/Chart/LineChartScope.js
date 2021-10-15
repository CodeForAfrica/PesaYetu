import { xAxis, defaultConfig, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function LineChartScope(data, metadata, config, parentData) {
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
    parent_label: parentLabel,
  } = config;

  const { primary_group: primaryGroup, groups } = metadata;

  if (xTicks) {
    xAxis.tickCount = xTicks || 6;
  }

  const { signals: filterSignals, filters } = createFiltersForGroups(groups);

  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A",
    config: defaultConfig,
    autosize: { type: "fit-x", contains: "padding" },
    padding: 5,
    width: { signal: "width" },
    height: 310,
    data: [
      {
        name: "primaryData",
        values: data,
        transform: [...filters],
      },
      {
        name: "parentData",
        values: parentData,
        transform: [...filters],
      },
      {
        name: "primary_data_formatted",
        source: "primaryData",
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
            signal: "percentage_extent",
          },
          {
            type: "extent",
            field: "count",
            signal: "value_extent",
          },
        ],
      },
      {
        name: "parent_data_formatted",
        source: "parentData",
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
            signal: "parent_percentage_extent",
          },
          {
            type: "extent",
            field: "count",
            signal: "parent_value_extent",
          },
        ],
      },
    ],
    signals: [
      ...commonSignal,
      {
        name: "interpolate",
        value: "linear",
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
        name: "xscale",
        type: "point",
        domain: {
          data: "primary_data_formatted",
          field: { signal: "mainGroup" },
        },
        range: [15, { signal: "width" }],
      },
      {
        name: "yscale",
        type: "linear",
        domain: {
          data: "primary_data_formatted",
          field: { signal: "datatype[Units]" },
        },
        range: [{ signal: "height" }, 0],
        nice: true,
        zero: false,
        clamp: true,
      },
      {
        name: "color",
        type: "ordinal",
        range: "category",
        domain: {
          data: "primary_data_formatted",
          field: { signal: "mainGroup" },
        },
      },
      {
        name: "pcolor",
        type: "ordinal",
        range: "category",
        domain: { data: "parent_data_formatted", field: "variant" },
      },
    ],
    axes: [
      {
        orient: "left",
        scale: "yscale",
        domain: false,
        domainOpacity: 0.5,
        tickSize: 0,
        labelPadding: 6,
        zindex: 1,
        format: { signal: "numberFormat[Units]" },
      },
      {
        orient: "bottom",
        scale: "xscale",
        bandPosition: 0,
        domainOpacity: 0.5,
        tickSize: 0,
        grid: true,
        labelPadding: 6,
      },
    ],
    legends:
      parentData?.length > 1
        ? [
            {
              fill: "pcolor",
              offset: -20,
              orient: "top-right",
              labelFont: theme.typography.fontFamily,
              labelColor: theme.palette.chart.text.primary,
              encode: {
                symbols: {
                  shape: { value: "stroke" },
                  update: {
                    shape: { value: "stroke" },
                    size: { value: 500 },
                    stroke: { value: theme.palette.chart.text.primary },
                    strokeDash: { value: [2, 2] },
                  },
                },
                labels: {
                  update: {
                    text: { value: parentLabel },
                  },
                },
              },
            },
          ]
        : null,

    marks: [
      {
        type: "group",
        encode: {
          update: {
            x: { value: 0 },
            height: { signal: "height" },
          },
        },
        marks: [
          {
            name: "line",
            from: { data: "primary_data_formatted" },
            type: "line",
            encode: {
              enter: {
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                stroke: { scale: "color", field: { signal: "mainGroup" } },
                y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                strokeWidth: { value: 2 },
              },
              update: {
                interpolate: { signal: "interpolate" },
                strokeOpacity: { value: 1 },
              },
            },
          },
          {
            name: "line symbol",
            from: { data: "primary_data_formatted" },
            type: "symbol",
            encode: {
              enter: {
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                fill: { value: theme.palette.primary.main },
              },
              update: {
                size: { value: 5 },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
                },
              },
              hover: {
                size: { value: 70 },
              },
            },
          },
        ],
      },
      {
        type: "group",
        encode: {
          update: {
            x: { value: 0 },
            height: { signal: "height" },
          },
        },
        marks: [
          {
            name: "line",
            from: { data: "parent_data_formatted" },
            type: "line",
            encode: {
              enter: {
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                stroke: { value: theme.palette.chart.text.primary },
                y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                strokeWidth: { value: 2 },
                strokeDash: { value: [2, 2] },
              },
              update: {
                interpolate: { signal: "interpolate" },
                strokeOpacity: { value: 1 },
              },
            },
          },
          {
            name: "line symbol",
            from: { data: "parent_data_formatted" },
            type: "symbol",
            encode: {
              enter: {
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                fill: { value: theme.palette.chart.text.primary },
              },
              update: {
                size: { value: 5 },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value), 'category': 'parent'}",
                },
              },
              hover: {
                size: { value: 70 },
              },
            },
          },
        ],
      },
    ],
  };
}
