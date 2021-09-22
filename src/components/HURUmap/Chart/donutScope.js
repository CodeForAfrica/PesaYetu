// import { xAxis, xScale } from "./properties";
import { createFiltersForGroups } from "./utils";

const PERCENTAGE_TYPE = "percentage";
const VALUE_TYPE = "value";
const graphValueTypes = {
  Percentage: PERCENTAGE_TYPE,
  Value: VALUE_TYPE,
};

export default function configureDonutChart(data, metadata, config) {
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

  const { filters } = createFiltersForGroups(metadata.groups);

  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A basic donut chart example.",
    width: 200,
    height: 200,
    autosize: "none",

    signals: [
      {
        name: "selected",
        value: "",
        on: [{ events: "mouseover", update: "datum" }],
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
    ],

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
        ],
      },
    ],
    legends: [
      {
        fill: "color",
        title: "Legends",
        orient: "none",
        symbolType: "circle",
        padding: { value: 10 },
        encode: {
          symbols: { enter: { fillOpacity: { value: 1 } } },
        },
      },
    ],

    scales: [
      {
        name: "color",
        type: "ordinal",
        domain: { data: "table", field: { signal: "mainGroup" } },
        range: { scheme: "category20" },
      },
    ],

    marks: [
      {
        type: "arc",
        from: { data: "table" },
        encode: {
          enter: {
            fill: { scale: "color", field: { signal: "mainGroup" } },
            x: { signal: "width / 2" },
            y: { signal: "height / 2" },
          },
          update: {
            tooltip: {
              signal:
                "{'group': datum[mainGroup], 'count': format(datum.count, numberFormat.value)}",
            },
          },
        },
      },
    ],
  };
}
