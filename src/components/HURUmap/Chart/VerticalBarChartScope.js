import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function VerticalBarChartScope(
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

  return merge(
    Scope(
      primaryData,
      metadata,
      config,
      secondaryData,
      primaryParentData,
      secondaryParentData,
      "bar"
    ),
    {
      height: isCompare && secondaryData.length > 1 ? 620 : 310,
      signals: [
        {
          name: "height",
          value: isCompare && secondaryData.length > 1 ? 620 : 310,
        },
        {
          name: "isCompare",
          value: isCompare,
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
          domain: {
            data: "primary_formatted",
            field: { signal: "datatype[Units]" },
          },
          range: [
            {
              signal:
                "isCompare && data('secondary').length > 1 ? height/2: height",
            },
            0,
          ],
          nice: true,
        },
        {
          name: "s_xscale",
          type: "band",
          domain: { data: "primary_formatted", field: primaryGroup },
          range: [0, { signal: "width" }],
          padding: 0.15,
        },
        {
          name: "s_yscale",
          type: "linear",
          domain: {
            data: "primary_formatted",
            field: { signal: "datatype[Units]" },
          },
          range: [
            {
              signal:
                "isCompare && data('secondary').length > 1 ? height/2: height",
            },
            0,
          ],
          nice: true,
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
          name: "primary_vertical_bars",
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
          legends: isCompare
            ? [
                {
                  orient: "top",
                  fill: "legend_primary_scale",
                  labelFontWeight: "bold",
                  labelColor: "#666",
                  labelFont: theme.typography.fontFamily,
                },
              ]
            : null,
          marks: [
            {
              name: "vertical_bars",
              from: { data: "primary_formatted" },
              type: "rect",
              encode: {
                enter: {
                  x: { scale: "xscale", field: { signal: "mainGroup" } },
                  width: { scale: "xscale", band: 1 },
                  y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                  y2: { scale: "yscale", value: 0 },
                },
                update: {
                  fill: { value: theme.palette.primary.main },
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
              name: "parent",
              from: { data: "primary_parent_formatted" },
              type: "rule",
              encode: {
                enter: {
                  x: { scale: "xscale", field: { signal: "mainGroup" } },
                  x2: {
                    scale: "xscale",
                    field: { signal: "mainGroup" },
                    offset: { signal: "width/domain('xscale').length - 10" },
                  },
                  y: { scale: "yscale", field: { signal: "datatype[Units]" } },
                  y2: { scale: "yscale", field: { signal: "datatype[Units]" } },
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
          name: "secondary_vertical_bars",
          encode: {
            update: {
              x: { value: 0 },
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
          legends: isCompare
            ? [
                {
                  orient: "top",
                  fill: "legend_secondary_scale",
                  labelFontWeight: "bold",
                  labelColor: "#666",
                  labelFont: theme.typography.fontFamily,
                },
              ]
            : null,
          marks: [
            {
              from: { data: "secondary_formatted" },
              type: "rect",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  width: { scale: "s_xscale", band: 1 },
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
                  y2: { scale: "s_yscale", value: 0 },
                },
                update: {
                  fill: { value: theme.palette.secondary.main },
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
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
                  y2: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
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
