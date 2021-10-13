import { defaultConfig, xAxis, commonSignal } from "./properties";
import { createFiltersForGroups } from "./utils";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function StackedChartScope(data, metadata, config) {
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
        name: "table",
        values: data,
        transform: [...filters],
      },
      {
        name: "data_formatted",
        source: "table",
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
        update: "bandspace(domain('yscale').length, 0.1, 0.05) * y_step",
      },
      ...filterSignals,
    ],
    scales: [
      {
        name: "yscale",
        type: "band",
        domain: { data: "data_formatted", field: { signal: "mainGroup" } },
        range: { step: { signal: "y_step" } },
        padding: 0.15,
      },
      {
        name: "xscale",
        type: "linear",
        domain: { data: "data_formatted", field: "y1" },
        domainMin: { signal: "domainMin" },
        domainMax: { signal: "domainMax" },
        range: [0, { signal: "width" }],
        zero: true,
        clamp: true,
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
    ],

    marks: [
      {
        name: "bars",
        from: { data: "data_formatted" },
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
  };
}
