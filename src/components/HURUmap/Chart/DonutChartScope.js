import { defaultConfig } from "./properties";

import theme from "@/pesayetu/theme";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function DonutChartScope(data, metadata, config) {
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
  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A basic donut chart example.",
    width: 400,
    height: 200,
    autosize: "none",
    config: defaultConfig,
    signals: [
      {
        name: "groups",
        value: [primaryGroup],
      },
      {
        name: "Units",
        value: graphValueTypes[defaultType],
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
        name: "startAngle",
        value: 0,
      },
      {
        name: "endAngle",
        value: 6.29,
      },
      {
        name: "padAngle",
        value: 0,
      },
      {
        name: "innerRadius",
        value: 60,
      },
      {
        name: "cornerRadius",
        value: 0,
      },
      {
        name: "sort",
        value: false,
      },
    ],

    data: [
      {
        name: "table",
        values: data,
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
            type: "pie",
            field: "percentage",
            startAngle: { signal: "startAngle" },
            endAngle: { signal: "endAngle" },
            sort: { signal: "sort" },
          },
          {
            type: "formula",
            expr: "format(datum.percentage, numberFormat.percentage)",
            as: "percentGroupText",
          },
        ],
      },
    ],
    legends: [
      {
        fill: "color",
        stroke: "color",
        orient: "none",
        symbolType: "circle",
        direction: "vertical",
        labelFont: theme.typography.fontFamily,
        legendX: 240,
        legendY: 40,
        labelOffset: 12,
        rowPadding: 8,
        encode: {
          labels: {
            interactive: true,
            text: { scale: "legend_labels", field: "percentGroupText" },
            update: {
              fontSize: { value: 11 },
              fill: { value: theme.palette.chart.text },
            },
          },
          symbols: {
            enter: {
              fillOpacity: {
                value: "1",
              },
            },
          },
        },
      },
    ],

    scales: [
      {
        name: "legend_labels",
        type: "linear",
        domain: { data: "data_formatted", field: "percentage" },
      },
      {
        name: "color",
        type: "ordinal",
        domain: { data: "data_formatted", field: { signal: "mainGroup" } },
        range: "category",
      },
    ],

    marks: [
      {
        type: "arc",
        from: { data: "data_formatted" },
        encode: {
          enter: {
            fill: { scale: "color", field: { signal: "mainGroup" } },
            x: { signal: "width / 4" },
            y: { signal: "height / 2" },
          },
          update: {
            startAngle: { field: "startAngle" },
            endAngle: { field: "endAngle" },
            padAngle: { signal: "padAngle" },
            innerRadius: { signal: "innerRadius" },
            outerRadius: { signal: "width / 4" },
            cornerRadius: { signal: "cornerRadius" },
          },
        },
      },
    ],
  };
}
