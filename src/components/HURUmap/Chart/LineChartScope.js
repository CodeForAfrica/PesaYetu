import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function LineChartScope(
  primaryData,
  metadata,
  config,
  secondaryData,
  primaryParentData,
  secondaryParentData,
  profileNames,
  isCompare,
  isMobile
) {
  const { xTicks, parentLabel } = config;

  const { primary_group: primaryGroup } = metadata;

  return merge(
    Scope(
      primaryData,
      metadata,
      config,
      secondaryData,
      primaryParentData,
      secondaryParentData,
      "line"
    ),
    {
      height: isMobile && isCompare && secondaryData?.length > 1 ? 620 : 310,
      signals: [
        {
          name: "height",
          value: isMobile && isCompare && secondaryData?.length > 1 ? 620 : 310,
        },
        {
          name: "isMobile",
          value: isMobile,
        },
        {
          name: "isCompare",
          value: isCompare,
        },
      ],
      scales: [
        {
          name: "xscale",
          type: "point",
          domain: {
            data: "primary_formatted",
            field: primaryGroup,
          },
          range: [
            15,
            {
              signal:
                "data('secondary').length > 1 && !isMobile ? width/2 - 30 : width",
            },
          ],
        },
        {
          name: "s_xscale",
          type: "point",
          domain: {
            data: "secondary_formatted",
            field: primaryGroup,
          },
          range: [
            15,
            {
              signal:
                "!isMobile && data('secondary').length > 1 ? width/2 - 30 : data('secondary').length > 1 ? width : 0",
            },
          ],
        },
        {
          name: "yscale",
          type: "linear",
          domain: {
            data: "primary_formatted",
            field: { signal: "datatype[Units]" },
          },
          range: [{ signal: "isCompare && isMobile ? height/2: height" }, 0],
          nice: xTicks || 6,
          zero: false,
          clamp: true,
        },
        {
          name: "s_yscale",
          type: "linear",
          domain: {
            data: "secondary_formatted",
            field: { signal: "datatype[Units]" },
          },
          range: [{ signal: "isCompare && isMobile ? height/2: height" }, 0],
          nice: xTicks || 6,
          zero: false,
          clamp: true,
        },
        {
          name: "color",
          type: "ordinal",
          range: "category",
          domain: {
            data: "primary_formatted",
            field: primaryGroup,
          },
        },
        {
          name: "secondary_color",
          type: "ordinal",
          range: "secondary",
          domain: {
            data: "secondary_formatted",
            field: primaryGroup,
          },
        },
        {
          name: "parent_color_scale",
          type: "ordinal",
          range: "category",
          domain: [parentLabel],
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
      ],

      marks: [
        {
          type: "group",
          name: "primary_lines",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: {
                signal:
                  "isMobile && isCompare && data('secondary').length > 1 ? height/2: height",
              },
              width: {
                signal:
                  "isMobile && data('secondary').length > 1 ? width : width/2",
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
              domain: false,
              domainOpacity: 0.5,
              tickSize: 0,
              tickCount: xTicks || 6,
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
          marks: [
            {
              name: "line",
              from: { data: "primary_formatted" },
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
              from: { data: "primary_formatted" },
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
          name: "primary_parent_line",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: {
                signal:
                  "isMobile && isCompare && data('secondary').length > 1 ? height/2: height",
              },
            },
          },
          legends:
            primaryParentData?.length > 1
              ? [
                  {
                    fill: "parent_color_scale",
                    orient: "none",
                    legendX: {
                      signal:
                        "data('secondary').length > 1  && !isMobile? (width / 2 ) - 100 : width - 85",
                    },
                    legendY: { value: -35 },
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
              name: "line",
              from: { data: "primary_parent_formatted" },
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
              from: { data: "primary_parent_formatted" },
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
          name: "secondary_lines",
          encode: {
            update: {
              x: {
                signal:
                  "!isMobile && data('secondary').length > 1 ? width / 2 + 30 : 0",
              },
              y: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2 + 60: data('secondary').length > 1 ? chartY: height + 60",
              },
              height: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2: data('secondary').length > 1 ? height: 0",
              },
              width: {
                signal:
                  "!isMobile && data('secondary').length > 1 ? (width / 2 ) : data('secondary').length > 1 ? width : 0",
              },
            },
          },
          legends: isCompare
            ? [
                {
                  orient: "top",
                  fill: "legend_secondary_scale",
                  labelFontWeight: "bold",
                  labelLimit: 400,
                  labelColor: "#666",
                  labelFont: theme.typography.fontFamily,
                },
              ]
            : null,
          axes:
            secondaryData?.length > 1
              ? [
                  {
                    orient: "left",
                    scale: "s_yscale",
                    domain: false,
                    domainOpacity: 0.5,
                    tickSize: 0,
                    tickCount: xTicks || 6,
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
                    grid: true,
                    labelPadding: 6,
                  },
                ]
              : null,
          marks: [
            {
              name: "line",
              from: { data: "secondary_formatted" },
              type: "line",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  stroke: {
                    scale: "secondary_color",
                    field: { signal: "mainGroup" },
                  },
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
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
              from: { data: "secondary_formatted" },
              type: "symbol",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
                  fill: { value: theme.palette.secondary.main },
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
          name: "secondary_parent_line",
          encode: {
            update: {
              x: {
                signal:
                  "!isMobile && data('secondary').length > 1 ? width / 2 + 30 : 0",
              },
              y: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2 + 30: data('secondary').length > 1 ? chartY: height + 40",
              },
              height: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2: 0",
              },
            },
          },
          legends:
            secondaryParentData?.length > 1
              ? [
                  {
                    fill: "parent_color_scale",
                    offset: 20,
                    orient: "none",
                    legendX: {
                      signal: "isMobile ? width -90: (width / 2 ) - 120",
                    },
                    legendY: { value: isMobile ? -10 : -40 },
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
              name: "line",
              from: { data: "secondary_parent_formatted" },
              type: "line",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  stroke: { value: theme.palette.chart.text.primary },
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
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
              from: { data: "secondary_parent_formatted" },
              type: "symbol",
              encode: {
                enter: {
                  x: { scale: "s_xscale", field: { signal: "mainGroup" } },
                  y: {
                    scale: "s_yscale",
                    field: { signal: "datatype[Units]" },
                  },
                  fill: { value: theme.palette.chart.text.primary },
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
      ],
    }
  );
}
