import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function VerticalStackedChartScope(
  primaryData,
  metadata,
  config,
  secondaryData,
  primaryParentData,
  secondaryParentData,
  isCompare
) {
  const { parentLabel } = config;

  const { primary_group: primaryGroup } = metadata;
  const stackedField = config.stacked_field;

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
      height: isCompare && secondaryData?.length > 1 ? 620 : 310,
      signals: [
        {
          name: "height",
          value: isCompare && secondaryData?.length > 1 ? 620 : 310,
        },
        {
          name: "isCompare",
          value: isCompare,
        },
        {
          name: "stackedField",
          value: stackedField,
        },
      ],
      scales: [
        {
          name: "xscale",
          type: "band",
          domain: { data: "primary_formatted", field: primaryGroup },
          range: [0, { signal: "width" }],
          padding: 0.15,
        },
        {
          name: "yscale",
          type: "linear",
          domain: { data: "primary_formatted", field: "y1" },
          domainMin: { signal: "domainMin" },
          domainMax: { signal: "domainMax" },
          range: [
            {
              signal:
                "isCompare && data('secondary').length > 1 ? height/2: height",
            },
            0,
          ],
          zero: true,
          nice: true,
        },
        {
          name: "s_xscale",
          type: "band",
          domain: { data: "secondary_formatted", field: primaryGroup },
          range: [0, { signal: "width" }],
          padding: 0.15,
        },
        {
          name: "s_yscale",
          type: "linear",
          domain: { data: "secondary_formatted", field: "y1" },
          domainMin: { signal: "domainMin" },
          domainMax: { signal: "domainMax" },
          range: [
            {
              signal:
                "isCompare && data('secondary').length > 1 ? height/2: height",
            },
            0,
          ],
          zero: true,
          nice: true,
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
          name: "color",
          type: "ordinal",
          range: "category",
          domain: {
            data: "primary_formatted",
            field: stackedField,
          },
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
              height: {
                signal:
                  "isCompare && data('secondary').length > 1 ? height/2: height",
              },
            },
          },
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
          ],
          marks: [
            {
              name: "bars",
              from: { data: "primary_formatted" },
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
                  x: { scale: "xscale", field: { signal: "mainGroup" } },
                  y: { scale: "yscale", field: "y0" },
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
          name: "primary_parent_rule",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: {
                signal:
                  "isCompare && data('secondary').length > 1 ? height/2: height",
              },
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
              from: { data: "primary_parent_formatted" },
              type: "rule",
              encode: {
                update: {
                  x: { scale: "xscale", field: { signal: "mainGroup" } },
                  x2: {
                    scale: "xscale",
                    field: { signal: "mainGroup" },
                    offset: { signal: "width/domain('xscale').length - 10" },
                  },
                  y: { scale: "yscale", field: "y1" },
                  y2: { scale: "yscale", field: "y1" },
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
          name: "secondary_stacked_bars",
          encode: {
            update: {
              x: {
                value: 0,
              },
              y: {
                signal:
                  "data('secondary').length > 1 ? height/2 + 60: height + 40",
              },
              height: {
                signal: "data('secondary').length > 1 ? height/2: 0",
              },
            },
          },
          axes:
            secondaryData?.length > 1
              ? [
                  {
                    orient: "left",
                    scale: "s_yscale",
                    domainOpacity: 0.5,
                    tickSize: 0,
                    grid: true,
                    labelPadding: 6,
                    zindex: 1,
                    format: { signal: "numberFormat[Units]" },
                  },
                  {
                    orient: "bottom",
                    scale: "s_xscale",
                    bandPosition: 0,
                    domainOpacity: 0.5,
                    tickSize: 0,
                    labels: false,
                  },
                ]
              : null,
          legends:
            secondaryData?.length > 1
              ? [
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
              : null,
          marks: [
            {
              name: "secondary_bars",
              from: { data: "secondary_formatted" },
              type: "rect",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  width: { scale: "s_xscale", band: 1 },
                  y: { scale: "s_yscale", field: "y0" },
                  y2: { scale: "s_yscale", field: "y1" },
                  fill: { scale: "secondary_color", field: stackedField },
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
          name: "secondary_parent_rule",
          encode: {
            update: {
              x: { value: 0 },
              y: {
                signal:
                  "data('secondary').length > 1 ? height/2 + 30: data('secondary').length > 1 ? chartY: height + 40",
              },
              height: {
                signal: "data('secondary').length > 1 ? height/2: 0",
              },
            },
          },
          legends:
            secondaryParentData?.length > 1
              ? [
                  {
                    fill: "parent_color_scale",
                    orient: "none",
                    legendX: { signal: "width - 90" },
                    legendY: { value: -10 },
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
              from: { data: "secondary_parent_formatted" },
              type: "rule",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  x2: {
                    scale: "s_xscale",
                    field: { signal: "mainGroup" },
                    offset: { signal: "width/domain('xscale').length - 10" },
                  },
                  y: { scale: "s_yscale", field: "y1" },
                  y2: { scale: "s_yscale", field: "y1" },
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
