import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function StackedChartScope(
  primaryData,
  metadata,
  config,
  secondaryData,
  primaryParentData,
  secondaryParentData,
  profileNames,
  isCompare
) {
  const { parentLabel } = config;

  const { primary_group: primaryGroup } = metadata;
  const stackedField = config.stacked_field;

  const secondaryLegend = isCompare
    ? [
        {
          orient: {
            value: "none",
          },
          legendY: {
            signal: "height + 30 ",
          },
          labelLimit: 400,
          legendX: { signal: "-width/2 - 30" },
          fill: "legend_secondary_scale",
          labelFontWeight: "bold",
          labelColor: "#666",
          labelFont: theme.typography.fontFamily,
        },
      ]
    : null;

  return merge(
    Scope(
      primaryData,
      metadata,
      config,
      secondaryData,
      primaryParentData,
      secondaryParentData,
      "stacked",
      [
        {
          type: "stack",
          groupby: [primaryGroup],
          field: { signal: "datatype[Units]" },
        },
      ]
    ),
    {
      signals: [
        {
          name: "height",
          update: "bandspace(domain('yscale').length, 0.1, 0.05) * y_step",
        },
        {
          name: "stackedField",
          value: stackedField,
        },
      ],
      scales: [
        {
          name: "yscale",
          type: "band",
          domain: { data: "primary_formatted", field: primaryGroup },
          range: { step: { signal: "y_step" } },
          padding: 0.15,
        },
        {
          name: "xscale",
          type: "linear",
          domain: { data: "primary_formatted", field: "y1" },
          domainMin: { signal: "domainMin" },
          domainMax: { signal: "domainMax" },
          range: [
            0,
            {
              signal: "data('secondary').length > 1 ? width/2 - 30 : width",
            },
          ],
          zero: true,
          clamp: true,
          nice: { signal: "primaryXTickCount" },
        },
        {
          name: "s_xscale",
          type: "linear",
          domain: { data: "secondary_formatted", field: "y1" },
          domainMin: { signal: "domainMin" },
          domainMax: { signal: "domainMax" },
          range: [
            0,
            {
              signal: "data('secondary').length > 1 ? width/2 - 30 : 0",
            },
          ],
          zero: true,
          clamp: true,
          nice: { signal: "secondaryXTickCount" },
        },
        {
          name: "color",
          type: "ordinal",
          range: "category",
          domain: {
            data: "primary_formatted",
            field: stackedField,
            sort: true,
          },
        },
        {
          name: "secondary_color",
          type: "ordinal",
          range: "secondary",
          domain: {
            data: "secondary_formatted",
            field: stackedField,
          },
        },
        {
          name: "legend_primary_scale",
          type: "ordinal",
          domain: [profileNames.primary.toUpperCase()],
          range: [theme.palette.primary.main],
        },
        {
          name: "legend_secondary_scale",
          type: "ordinal",
          domain: [profileNames.secondary.toUpperCase()],
          range: [theme.palette.secondary.main],
        },
        {
          name: "parent_color_scale",
          type: "ordinal",
          range: "category",
          domain: [parentLabel],
        },
      ],

      marks: [
        {
          type: "group",
          name: "primary_stacked_bars",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: { signal: "height" },
              width: {
                signal: "data('secondary').length > 1 ? (width / 2 ) : width",
              },
            },
          },
          axes: [
            {
              orient: "left",
              scale: "yscale",
              domainOpacity: 0.5,
              tickSize: 0,
              labelPadding: 6,
              zindex: 1,
            },
            {
              orient: "bottom",
              scale: "xscale",
              bandPosition: 0,
              domainOpacity: 0.5,
              tickSize: 0,
              format: { signal: "numberFormat[Units]" },
              grid: true,
              labelPadding: 6,
              tickCount: { signal: "primaryXTickCount" },
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
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  fillOpacity: { value: 1 },
                  x: { scale: "xscale", field: "y0" },
                  x2: { scale: "xscale", field: "y1" },
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
          name: "primary_parent_rule",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: { signal: "height" },
            },
          },
          legends:
            primaryParentData?.length > 1
              ? [
                  {
                    fill: "parent_color_scale",
                    orient: "none",
                    legendX: { signal: "width - 90" },
                    legendY: { value: -40 },
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
                    },
                  },
                ]
              : null,
          marks: [
            {
              name: "parent",
              from: { data: "primary_parent_formatted" },
              type: "rule",
              encode: {
                update: {
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  y2: {
                    scale: "yscale",
                    field: { signal: "mainGroup" },
                    offset: { signal: "y_step - 5" },
                  },
                  x: { scale: "xscale", field: "y1" },
                  x2: { scale: "xscale", field: "y1" },
                  stroke: {
                    signal:
                      "datum.primary && (datum[datatype[Units]] > datum.primary[datatype[Units]]) ? grey_mark: white_mark",
                  },
                  strokeWidth: { value: 1 },
                  strokeDash: { value: [2, 2] },
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
              x: { signal: "(width / 2 ) + 30" },
              y: { signal: "chartY" },
              height: {
                signal: "data('secondary').length > 1 ? height : 0",
              },
            },
          },
          axes: [
            {
              orient: "bottom",
              scale: "s_xscale",
              bandPosition: 0,
              domainOpacity: 0.5,
              tickSize: 0,
              format: { signal: "numberFormat[Units]" },
              grid: true,
              labelPadding: 6,
              tickCount: { signal: "secondaryXTickCount" },
            },
          ],
          legends:
            isCompare && secondaryData?.length > 1
              ? [
                  ...secondaryLegend,
                  {
                    fill: "secondary_color",
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
                ]
              : secondaryLegend,
          marks: [
            {
              name: "secondary_bars",
              from: { data: "secondary_formatted" },
              type: "rect",
              encode: {
                enter: {
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  height: { scale: "yscale", band: 1 },
                  x: { scale: "s_xscale", field: "y0" },
                  x2: { scale: "s_xscale", field: "y1" },
                  fill: { scale: "secondary_color", field: stackedField },
                },
                update: {
                  fillOpacity: { value: 1 },
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  x: { scale: "s_xscale", field: "y0" },
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
          name: "secondary_parent_rule",
          encode: {
            update: {
              x: { signal: "(width / 2 ) + 30" },
              height: {
                signal: "data('secondary').length > 1 ? height : 0",
              },
            },
          },
          marks: [
            {
              name: "secondary_parent",
              from: { data: "secondary_parent_formatted" },
              type: "rule",
              encode: {
                update: {
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  y2: {
                    scale: "yscale",
                    field: { signal: "mainGroup" },
                    offset: { signal: "y_step - 5" },
                  },
                  x: { scale: "s_xscale", field: "y1" },
                  x2: { scale: "s_xscale", field: "y1" },
                  stroke: {
                    signal:
                      "datum.secondary && (datum[datatype[Units]] > datum.secondary[datatype[Units]]) ? grey_mark: white_mark",
                  },
                  strokeWidth: { value: 1 },
                  strokeDash: { value: [2, 2] },
                },
              },
            },
          ],
        },
      ],
    }
  );
}
