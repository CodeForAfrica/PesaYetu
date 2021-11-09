import merge from "deepmerge";

import Scope from "./Scope";

import theme from "@/pesayetu/theme";

export default function TreemapChartScope(
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
  const nestedFields = config?.nest_fields ?? [primaryGroup]; // if nest fields are undefined, make use primaryGroup

  return merge(
    Scope(
      primaryData,
      metadata,
      config,
      secondaryData,
      primaryParentData,
      secondaryParentData,
      "treemap",
      [
        {
          type: "nest",
          keys: nestedFields,
        },
        {
          type: "treemap",
          field: { signal: "datatype[Units]" },
          method: { signal: "layout" },
          ratio: { signal: "aspectRatio" },
          size: [
            { signal: "isCompare && !isMobile ? width/2 -30: width" },
            { signal: "isCompare && isMobile ? height/2 : height" },
          ],
        },
      ]
    ),
    {
      height: isMobile && isCompare && secondaryData?.length > 1 ? 760 : 380,
      signals: [
        {
          name: "height",
          value: isMobile && isCompare && secondaryData?.length > 1 ? 760 : 380,
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
          name: "nestedFields",
          value: nestedFields,
        },
        {
          name: "percentageAverage",
          update: "100 / data('primary_formatted').length",
        },
        {
          name: "secondaryPercentageAverage",
          update: "100 / data('secondary_formatted').length",
        },
      ],
      scales: [
        {
          name: "color",
          type: "ordinal",
          domain: { data: "primary_formatted", field: nestedFields[0] },
          range: [theme.palette.primary.main],
        },
        {
          name: "secondary",
          type: "ordinal",
          domain: { data: "secondary_formatted", field: nestedFields[0] },
          range: [theme.palette.secondary.main],
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
          name: "primary_tree",
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
          marks: [
            {
              type: "rect",
              from: { data: "primary_formatted" },
              encode: {
                enter: {
                  fill: { scale: "color", field: { signal: "mainGroup" } },
                  stroke: { value: "#fff" },
                },
                update: {
                  x: { field: "x0" },
                  y: { field: "y0" },
                  x2: { field: "x1" },
                  y2: { field: "y1" },
                  tooltip: {
                    signal:
                      "{'group': datum[mainGroup] + ' ' + (isValid(datum[nestedFields[1]]) ? datum[nestedFields[1]] : '' ) + ' ' + (isValid(datum[nestedFields[2]]) ? datum[nestedFields[2]] :  '') , 'count': format(datum.count, numberFormat.value)}",
                  },
                },
              },
            },
            {
              type: "text",
              from: { data: "primary_formatted" },
              encode: {
                enter: {
                  font: { value: theme.typography.fontFamily },
                  fill: { value: theme.palette.text.secondary },
                },
                update: {
                  align: { value: "left" },
                  baseline: { value: "top" },
                  x: { signal: "datum.x0 + 12" },
                  y: { signal: "datum.y0 + 15" },
                  text: {
                    signal:
                      "datum.percentage * 100 < percentageAverage ? '': [format(datum[datatype[Units]], numberFormat[Units]), datum[mainGroup], datum[nestedFields[1]] || '', datum[nestedFields[2]] || '' ]",
                  },
                },
              },
            },
          ],
        },
        {
          type: "group",
          name: "secondary_tree",
          encode: {
            update: {
              x: {
                signal:
                  "!isMobile && data('secondary').length > 1 ? width / 2 + 15 : 0",
              },
              y: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2 + 30: data('secondary').length > 1 ? chartY: height + 40",
              },
              height: {
                signal:
                  "isMobile && data('secondary').length > 1 ? height/2: 0",
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
                  labelColor: "#666",
                  labelFont: theme.typography.fontFamily,
                },
              ]
            : null,
          marks: [
            {
              type: "rect",
              from: { data: "secondary_formatted" },
              encode: {
                enter: {
                  fill: { scale: "secondary", field: { signal: "mainGroup" } },
                  stroke: { value: "#fff" },
                },
                update: {
                  x: { field: "x0" },
                  y: { field: "y0" },
                  x2: { field: "x1" },
                  y2: { field: "y1" },
                  tooltip: {
                    signal:
                      "{'group': datum[mainGroup] + ' ' + (isValid(datum[nestedFields[1]]) ? datum[nestedFields[1]] : '' ) + ' ' + (isValid(datum[nestedFields[2]]) ? datum[nestedFields[2]] :  '') , 'count': format(datum.count, numberFormat.value)}",
                  },
                },
              },
            },
            {
              type: "text",
              from: { data: "secondary_formatted" },
              encode: {
                enter: {
                  font: { value: theme.typography.fontFamily },
                  fill: { value: theme.palette.text.secondary },
                },
                update: {
                  align: { value: "left" },
                  baseline: { value: "top" },
                  x: { signal: "datum.x0 + 12" },
                  y: { signal: "datum.y0 + 15" },
                  text: {
                    signal:
                      "datum.percentage * 100 < secondaryPercentageAverage ? '': [format(datum[datatype[Units]], numberFormat[Units]), datum[mainGroup], datum[nestedFields[1]] || '', datum[nestedFields[2]] || '' ]",
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
