import { defaultConfig, xAxis } from "./properties";
import data from "./Scope/data";
import signals from "./Scope/signals";
import { createFiltersForGroups } from "./utils";

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
  const { xTicks, parentLabel } = config;

  const { primary_group: primaryGroup, groups } = metadata;

  const { signals: filterSignals, filters } = createFiltersForGroups(groups);

  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "A",
    config: defaultConfig,
    autosize: { type: "fit-x", contains: "padding" },
    padding: 5,
    width: { signal: "width" },
    height: { signal: "totalHeight" },
    data: [
      ...data("primary", primaryData, filters),
      ...data("primary_parent", primaryParentData, filters, [
        {
          type: "lookup",
          from: "primary_formatted",
          key: { signal: "mainGroup" },
          fields: [{ signal: "mainGroup" }],
          as: ["primary"],
        },
      ]),
      ...data("secondary", secondaryData, filters),
      ...data("secondary_parent", secondaryParentData, filters, [
        {
          type: "lookup",
          from: "secondary_formatted",
          key: { signal: "mainGroup" },
          fields: [{ signal: "mainGroup" }],
          as: ["secondary"],
        },
      ]),
    ],
    signals: signals(
      "bar",
      filterSignals,
      primaryGroup,
      [primaryGroup],
      config
    ),
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
            signal:
              "data('secondary_formatted').length > 1 ? width/2 - 30 : width",
          },
        ],
        nice: true,
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
            signal: "data('secondary_formatted').length > 1 ? width/2 - 30 : 0",
          },
        ],
        nice: true,
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
        name: "primary_parent_color_scale",
        type: "ordinal",
        range: "category",
        domain: [parentLabel],
      },
      {
        name: "secondary_parent_color_scale",
        type: "ordinal",
        range: "category",
        domain: [parentLabel],
      },
    ],

    marks: [
      {
        type: "group",
        name: "titleGroup",
        encode: {
          enter: {
            y2: { signal: "titleGroupY" },
            height: { signal: "titleH" },
          },
        },
        marks: [
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "chartTitle" },
              },
              update: {
                opacity: { value: 1 },
                x2: { signal: "titleX" },
                y2: { signal: "titleY" },
                fontSize: { signal: "titlefontSize" },
                fontWeight: { signal: "titlefontWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: theme.palette.chart.text.primary },
                text: { signal: "chartSubtitle" },
              },
              update: {
                opacity: { value: 1 },
                x: { signal: "subtitleX" },
                y: { signal: "subtitleY" },
                fontSize: { signal: "subtitlefontSize" },
                fontWeight: { signal: "subtitlefontWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "projectName" },
              },
              update: {
                align: { signal: "projectAlign" },
                x: { signal: "projectX" },
                y: { signal: "projectY" },
                fill: { signal: "projectFill" },
                fontSize: { signal: "subtitlefontSize" },
                fontWeight: { signal: "subtitlefontWeight" },
              },
            },
          },
          {
            type: "rule",
            encode: {
              enter: {
                x: { value: 0 },
                x2: { signal: "titleH > 0 ? width: 0" },
                y: { signal: "titleH" },
                y2: { signal: "titleH" },
                stroke: { value: theme.palette.chart.text.primary },
                strokeWidth: { value: 2 },
                strokeOpacity: { signal: "titleY > 50 ? 0.1: 1" },
              },
            },
          },
        ],
      },
      {
        type: "group",
        name: "primary_bars",
        encode: {
          update: {
            x: { value: 0 },
            y: { signal: "titleH" },
            height: { signal: "height" },
            width: {
              signal:
                "data('secondary_formatted').length > 1 ? (width / 2 ) : width",
            },
          },
        },
        legends: isCompare
          ? [
              {
                orient: "top",
                fill: "legend_primary_scale",
                labelFontWeight: "bold",
                labelColor: isCompare ? "#666" : "transparent",
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
            ...xAxis,
            tickCount: xTicks,
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
            y: { signal: "titleH" },
            height: { signal: "height" },
          },
        },
        legends:
          primaryParentData.length > 1
            ? [
                {
                  fill: "primary_parent_color_scale",
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
            y: { signal: "titleH" },
            height: {
              signal: "data('secondary_formatted').length > 1 ? height : 0",
            },
          },
        },
        legends: isCompare
          ? [
              {
                orient: {
                  signal:
                    "data('secondary_formatted').length > 1 ? 'top' : 'none'",
                },
                legendY: {
                  signal:
                    "data('secondary_formatted').length > 1 ? 0 : height + 28 ",
                },
                legendX: { signal: "-width/2 - 30" },
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
            tickCount: xTicks,
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
            y: { signal: "titleH" },
            height: { signal: "height" },
          },
        },
        marks: [
          {
            name: "secondary_parent",
            from: { data: "secondary_parent_formatted" },
            type: "rule",
            encode: {
              enter: {
                y: { scale: "yscale", field: { signal: "mainGroup" } },
                y2: {
                  scale: "yscale",
                  field: { signal: "mainGroup" },
                  offset: { signal: "y_step - 5" },
                },
                x: { scale: "s_xscale", field: { signal: "datatype[Units]" } },
                x2: { scale: "s_xscale", field: { signal: "datatype[Units]" } },
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
      {
        type: "group",
        name: "sourceGroup",
        encode: {
          enter: {
            y2: { signal: "sourceGroupY" },
            height: { signal: "sourceGroupH" },
          },
        },
        marks: [
          {
            type: "rule",
            encode: {
              enter: {
                x: { value: 0 },
                x2: { signal: "sourceY > 0 ? width: 0" },
                y: { signal: "sourceY" },
                y2: { signal: "sourceY" },
                stroke: { value: theme.palette.chart.text.primary },
                strokeWidth: { value: 2 },
                strokeOpacity: { signal: "sourceY > 50 ? 0.1: 1" },
              },
            },
          },
          {
            type: "text",
            encode: {
              enter: {
                fill: { value: "#000" },
                text: { signal: "chartSource" },
              },
              update: {
                opacity: { value: 1 },
                x: { signal: "sourceX" },
                y: { signal: "sourceY > 50 ? sourceY + 20: 0" },
                fontSize: { signal: "sourceFontSize" },
                fontWeight: { signal: "sourceFontWeight" },
              },
            },
          },
          {
            type: "image",
            encode: {
              enter: {
                url: { signal: "logoUrl" },
              },
              update: {
                x: { signal: "logoX" },
                y: { signal: "sourceY > 50 ? sourceY + 20: 0" },
                width: { signal: "logoWidth" },
                aspect: { signal: "logoAspect" },
              },
            },
          },
        ],
      },
    ],
  };
}
