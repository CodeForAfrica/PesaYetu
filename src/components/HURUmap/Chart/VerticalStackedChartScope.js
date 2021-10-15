import { defaultConfig, xAxis, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function VerticalStackedChartScope(
  data,
  metadata,
  config,
  parentData
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
    parent_label: parentLabel,
    stacked_field: stackedField,
  } = config;

  const { primary_group: primaryGroup, groups } = metadata;

  if (xTicks) {
    xAxis.tickCount = xTicks;
  }

  const { signals: filterSignals, filters } = createFiltersForGroups(groups);

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
          {
            type: "stack",
            groupby: [primaryGroup],
            field: { signal: "datatype[Units]" },
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
            groupby: [primaryGroup],
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
        type: "band",
        domain: { data: "data_formatted", field: { signal: "mainGroup" } },
        range: [0, { signal: "width" }],
        padding: 0.15,
      },
      {
        name: "yscale",
        type: "linear",
        domain: { data: "data_formatted", field: "y1" },
        domainMin: { signal: "domainMin" },
        domainMax: { signal: "domainMax" },
        range: [{ signal: "height" }, 0],
        zero: true,
        nice: true,
      },
      {
        name: "color",
        type: "ordinal",
        range: "category",
        domain: {
          data: "data_formatted",
          field: stackedField,
        },
      },
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
        grid: true,
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
        labels: false,
      },
    ],
    legends: [
      {
        fill: "color",
        orient: "top",
        direction: "horizontal",
        strokeColor: "transparent",
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
      parentData?.length > 1
        ? {
            fill: "pcolor",
            offset: -35,
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
              legends: {
                update: {
                  x: { signal: "width" },
                  y: { signal: "height - 20" },
                },
              },
            },
          }
        : null,
    ],
    marks: [
      {
        type: "group",
        marks: [
          {
            name: "bars",
            from: { data: "data_formatted" },
            type: "rect",
            encode: {
              enter: {
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                width: { scale: "xscale", band: 1 },
                y: { scale: "yscale", field: "y0" },
                y2: { scale: "yscale", field: "y1" },
                fill: { scale: "color", field: stackedField },
              },
              update: {
                fillOpacity: { value: 1 },
                tooltip: {
                  signal:
                    "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value), 'category': datum[stackedField]}",
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
                x: { scale: "xscale", field: { signal: "mainGroup" } },
                x2: {
                  scale: "xscale",
                  field: { signal: "mainGroup" },
                  offset: { signal: "width/domain('xscale').length" },
                },
                y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                y2: { scale: "yscale", field: { signal: "datatype[Units]" } },
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
