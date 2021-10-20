import { xAxis, xScale, defaultConfig, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function BarChartScope(data, metadata, config, parentData) {
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
    parentLabel,
  } = config;

  const { primary_group: primaryGroup, groups } = metadata;

  if (xTicks) {
    xAxis.tickCount = xTicks;
  }

  const { signals: filterSignals, filters } = createFiltersForGroups(groups);

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
        name: "data_formatted",
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
        update: "bandspace(domain('yscale').length, 0.1, 0.05) * y_step",
      },
      ...filterSignals,
    ],
    scales: [
      {
        name: "yscale",
        type: "band",
        domain: {
          data: "data_formatted",
          field: { signal: "mainGroup" },
        },
        range: { step: { signal: "y_step" } },
        padding: 0.15,
      },
      xScale(),
      {
        name: "pcolor",
        type: "ordinal",
        range: "category",
        domain: { data: "parent_data_formatted", field: "parent" },
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
      xAxis,
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
            name: "bars",
            from: { data: "data_formatted" },
            type: "rect",
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                height: { scale: "yscale", band: 1 },
                x: { scale: "xscale", field: { signal: "datatype[Units]" } },
              },
              update: {
                fill: { value: theme.palette.primary.main },
                x: { scale: "xscale", field: { signal: "datatype[Units]" } },
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
        marks: [
          {
            name: "parent",
            from: { data: "parent_data_formatted" },
            type: "rule",
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                y2: {
                  scale: "yscale",
                  field: { signal: "mainGroup" },
                  offset: { signal: "y_step" },
                },
                x: { scale: "xscale", field: { signal: "datatype[Units]" } },
                x2: { scale: "xscale", field: { signal: "datatype[Units]" } },
                stroke: { value: theme.palette.text.secondary },
                fill: { value: theme.palette.text.secondary },
                strokeWidth: { value: 1 },
                strokeDash: { value: [2, 2] },
              },
            },
          },
        ],
      },
    ],
  };
}
