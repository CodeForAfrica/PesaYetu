import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function DonutChartScope(
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
  const { primary_group: primaryGroup } = metadata;

  const secondaryLegend = isCompare
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
    : [];

  return merge(
    Scope(
      primaryData,
      metadata,
      config,
      secondaryData,
      primaryParentData,
      secondaryParentData,
      "donut",
      [
        {
          type: "formula",
          expr: "format(datum[datatype[Units]], numberFormat[Units]) + ' ' + datum[mainGroup]",
          as: "custom_label",
        },
        {
          type: "pie",
          field: { signal: "datatype[Units]" },
          startAngle: { signal: "startAngle" },
          endAngle: { signal: "endAngle" },
          sort: { signal: "sort" },
        },
        {
          type: "collect",
          sort: { field: "count", order: "descending" },
        },
      ]
    ),
    {
      height: isMobile && isCompare && secondaryData?.length > 1 ? 380 : 180,
      width: 700,
      signals: [
        {
          name: "pieWidth",
          value: 400,
        },
        {
          name: "height",
          value: isMobile && isCompare && secondaryData?.length > 1 ? 380 : 180,
        },
        {
          name: "isMobile",
          value: isMobile,
        },
        {
          name: "isCompare",
          value: isCompare,
        },
        {
          name: "donutSize",
          value: 360,
        },
      ],
      scales: [
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
          name: "secondary",
          type: "ordinal",
          range: "secondary",
          domain: {
            data: "secondary_formatted",
            field: primaryGroup,
          },
        },
        {
          name: "legend_primary_scale",
          type: "ordinal",
          domain: [isCompare ? profileNames.primary.toUpperCase() : ""],
          range: [isCompare ? theme.palette.primary.main : "transparent"],
        },
        {
          name: "legend_secondary_scale",
          type: "ordinal",
          domain: [profileNames.secondary.toUpperCase()],
          range: [theme.palette.secondary.main],
        },
        {
          name: "empty_legend",
          type: "ordinal",
          domain: [""],
          range: ["transparent"],
        },
        {
          name: "legend_labels",
          type: "linear",
          domain: { data: "primary_formatted", field: "custom_label" },
          range: "category",
        },
      ],
      marks: [
        {
          type: "group",
          name: "primary_pie",
          encode: {
            update: {
              x: { value: 0 },
              y: { signal: "chartY" },
              height: {
                signal:
                  "isMobile && isCompare && data('secondary').length > 1 ? height/2: height",
              },
              width: { signal: "pieWidth" },
            },
          },
          legends: [
            {
              orient: "top",
              fill: "legend_primary_scale",
              labelFontWeight: "bold",
              labelColor: "#666",
              labelFont: theme.typography.fontFamily,
            },
            {
              fill: "color",
              stroke: "color",
              orient: "none",
              symbolType: "circle",
              direction: "vertical",
              labelFont: theme.typography.fontFamily,
              legendX: { signal: "donutSize/2 + 40" },
              legendY: 40,
              labelOffset: 12,
              rowPadding: 8,
              encode: {
                labels: {
                  interactive: true,
                  update: {
                    fontSize: { value: 11 },
                    fill: { value: theme.palette.chart.text.primary },
                    limit: {
                      signal:
                        "isMobile || data('secondary').length > 1 ? '150' : '380'",
                    },
                  },
                },
                symbols: {
                  enter: {
                    fillOpacity: {
                      value: 1,
                    },
                  },
                },
              },
            },
          ],
          marks: [
            {
              type: "arc",
              from: { data: "primary_formatted" },
              encode: {
                enter: {
                  x: { signal: "donutSize/4" },
                  y: {
                    signal:
                      "isMobile && data('secondary').length > 1 ? height /4 : height/2",
                  },
                },
                update: {
                  fill: { scale: "color", field: { signal: "mainGroup" } },
                  x: { signal: "donutSize/4" },
                  y: {
                    signal:
                      "isMobile && data('secondary').length > 1 ? height /4 : height/2",
                  },
                  startAngle: { field: "startAngle" },
                  endAngle: { field: "endAngle" },
                  padAngle: { signal: "padAngle" },
                  innerRadius: { signal: "innerRadius" },
                  outerRadius: { signal: "donutSize / 4" },
                  cornerRadius: { signal: "cornerRadius" },
                  tooltip: {
                    signal:
                      "{'group': datum[mainGroup], 'count': format(datum[datatype[Units]], numberFormat[Units])}",
                  },
                },
              },
            },
          ],
        },
        {
          type: "group",
          name: "secondary_pie",
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
              width: { signal: "data('secondary').length > 1 ? pieWidth : 0" },
            },
          },
          legends:
            secondaryData?.length > 1
              ? [
                  ...secondaryLegend,
                  {
                    fill: "secondary",
                    stroke: "secondary",
                    orient: "none",
                    symbolType: "circle",
                    direction: "vertical",
                    labelFont: theme.typography.fontFamily,
                    legendX: { signal: "donutSize / 2 + 40" },
                    legendY: 40,
                    labelOffset: 12,
                    rowPadding: 8,
                    encode: {
                      labels: {
                        interactive: true,
                        update: {
                          fontSize: { value: 11 },
                          fill: { value: theme.palette.chart.text.primary },
                        },
                      },
                      symbols: {
                        enter: {
                          fillOpacity: {
                            value: 1,
                          },
                        },
                      },
                    },
                  },
                ]
              : secondaryLegend,
          marks: [
            {
              type: "arc",
              from: { data: "secondary_formatted" },
              encode: {
                enter: {
                  x: { signal: "donutSize/4" },
                  y: {
                    signal:
                      "isMobile && data('secondary').length > 1 ? height /4 : height/2",
                  },
                },
                update: {
                  fill: { scale: "secondary", field: primaryGroup },
                  x: { signal: "donutSize/4" },
                  y: {
                    signal:
                      "isMobile && data('secondary').length > 1 ? height /4 : height/2",
                  },
                  startAngle: { field: "startAngle" },
                  endAngle: { field: "endAngle" },
                  padAngle: { signal: "padAngle" },
                  innerRadius: { signal: "innerRadius" },
                  outerRadius: { signal: "donutSize / 4 " },
                  cornerRadius: { signal: "cornerRadius" },
                  tooltip: {
                    signal:
                      "{'group': datum[mainGroup], 'count': format(datum[datatype[Units]], numberFormat[Units])}",
                  },
                },
              },
            },
          ],
        },
      ],
    }
  );
}
