import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function BarChartScope(
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
      signals: [
        {
          name: "height",
          update: "bandspace(domain('yscale').length, 0.1, 0.05) * y_step",
        },
      ],
      scales: [
        {
          name: "yscale",
          type: "band",
          domain: {
            data: "primary_formatted",
            field: primaryGroup,
          },
          range: { step: { signal: "y_step" } },
          padding: 0.15,
        },
        {
          name: "xscale",
          type: "linear",
          range: [
            0,
            {
              signal: "data('secondary').length > 1 ? width/2 - 30 : width",
            },
          ],
          nice: { signal: "primaryXTickCount" },
          zero: true,
          domain: {
            data: "primary_formatted",
            field: { signal: "datatype[Units]" },
          },
        },
        {
          name: "s_xscale",
          type: "linear",
          range: [
            0,
            {
              signal: "data('secondary').length > 1 ? width/2 - 30 : 0",
            },
          ],
          nice: { signal: "secondaryXTickCount" },
          zero: true,
          domain: {
            data: "secondary_formatted",
            field: { signal: "datatype[Units]" },
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
          name: "primary_bars",
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
          marks: [
            {
              from: { data: "primary_formatted" },
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
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
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
                  x: { scale: "xscale", field: { signal: "datatype[Units]" } },
                  x2: { scale: "xscale", field: { signal: "datatype[Units]" } },
                  stroke: {
                    signal:
                      " datum.primary && (datum[datatype[Units]] > datum.primary[datatype[Units]]) ? grey_mark: white_mark",
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
          legends: isCompare
            ? [
                {
                  orient: {
                    signal: "data('secondary').length > 1 ? 'top' : 'none'",
                  },
                  legendY: {
                    signal: "data('secondary').length > 1 ? 0 : height + 28 ",
                  },
                  legendX: { signal: "-width/2 - 30" },
                  labelLimit: 400,
                  fill: "legend_secondary_scale",
                  labelFontWeight: "bold",
                  labelColor: isCompare ? "#666" : "transparent",
                  labelFont: theme.typography.fontFamily,
                },
              ]
            : null,
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

          marks: [
            {
              type: "rect",
              from: { data: "secondary_formatted" },
              encode: {
                enter: {
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  height: { scale: "yscale", band: 1 },
                  x: {
                    scale: "s_xscale",
                    field: { signal: "datatype[Units]" },
                  },
                },
                update: {
                  fill: { value: theme.palette.secondary.main },
                  y: { scale: "yscale", field: { signal: "mainGroup" } },
                  x: {
                    scale: "s_xscale",
                    field: { signal: "datatype[Units]" },
                  },
                  x2: { scale: "s_xscale", value: 0 },
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
              x: { signal: "(width / 2 ) + 30" },
              height: { signal: "height" },
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
                  x: {
                    scale: "s_xscale",
                    field: { signal: "datatype[Units]" },
                  },
                  x2: {
                    scale: "s_xscale",
                    field: { signal: "datatype[Units]" },
                  },
                  stroke: {
                    signal:
                      " datum.secondary && (datum[datatype[Units]] > datum.secondary[datatype[Units]]) ? grey_mark: white_mark",
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
