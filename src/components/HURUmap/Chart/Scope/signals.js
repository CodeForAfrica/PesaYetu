import hoverIcon from "@/pesayetu/assets/icons/Component1375.png";
import theme from "@/pesayetu/theme";

const graphValueTypes = {
  Percentage: "percentage",
  Value: "value",
};

export default function Signals(
  chartType,
  filterSignals,
  primaryGroup,
  groups,
  config
) {
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

  return [
    {
      name: "width",
      update: "containerSize()[0] ? containerSize()[0] : 800",
      on: [
        {
          events: "window:resize",
          update: "containerSize()[0] ? containerSize()[0] : 800",
        },
      ],
    },
    {
      name: "cursor",
      value: `url("${
        chartType !== "line" ? hoverIcon.src : undefined
      }"), pointer`,
    },
    {
      name: "x_step",
      value: 40,
    },
    {
      name: "y_step",
      value: 35,
    },
    {
      name: "groups",
      value: groups,
    },
    {
      name: "Units",
      value: graphValueTypes[defaultType || "Value"],
    },
    {
      name: "applyFilter",
      value: false,
    },
    {
      name: "filterIndicator",
    },
    {
      name: "filterValue",
    },
    {
      name: "mainGroup",
      value: primaryGroup,
    },
    {
      name: "percentageFormatting",
      value: percentageFormatting || ".0%",
    },
    {
      name: "valueFormatting",
      value: valueFormatting || ",.0f",
    },
    {
      name: "trimZeroFormat",
      value: "~s",
    },
    {
      name: "numberFormat",
      update:
        "{ 'percentage': percentageFormatting, 'value':  data('secondary').length > 1 ? trimZeroFormat : valueFormatting }",
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
      name: "domainMin",
      update: "Units === 'percentage' ? percentageMinX : valueMinX",
    },
    {
      name: "domainMax",
      update: "Units === 'percentage' ? percentageMaxX : valueMaxX",
    },
    {
      name: "chartType",
      value: chartType,
    },
    {
      name: "totalHeight",
      update: "height",
    },
    {
      name: "interpolate",
      value: "linear",
    },
    {
      name: "white_mark",
      value: theme.palette.text.secondary,
    },
    {
      name: "grey_mark",
      value: theme.palette.chart.text.primary,
    },
    // arc signals (pie)
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
      value: 55,
    },
    {
      name: "cornerRadius",
      value: 0,
    },
    {
      name: "sort",
      value: false,
    },
    // treemap signals
    {
      name: "layout",
      value: "squarify",
    },
    {
      name: "aspectRatio",
      value: 1.6,
    },
    // signals for logo and title => image layout downloads
    { name: "chartY", value: 0 },
    { name: "titleX", value: 0 },
    { name: "titleY", value: 0 },
    { name: "titleH", value: 0 },
    { name: "titleGroupY" },
    { name: "titlefontSize", value: 18 },
    { name: "titlefontWeight", value: 600 },
    { name: "titlefont", value: theme.typography.fontFamily },
    { name: "subtitleX", value: 0 },
    { name: "subtitleY", update: "titleY + 20" },
    { name: "subtitlefontSize", value: 12 },
    { name: "subtitlefont", value: 12 },
    { name: "subtitlefontWeight", value: 400 },
    { name: "projectX", update: "width" },
    { name: "projectY", update: "titleY - 10" },
    { name: "projectAlign", value: "right" },
    { name: "sourceGroupH", value: 0 },
    { name: "sourceGroupY" },
    { name: "sourceX", value: 0 },
    { name: "sourceY", value: 0 },
    { name: "sourceFontSize", value: 11 },
    { name: "sourceFont", value: theme.typography.fontFamily },
    { name: "sourceFontWeight", value: 400 },
    { name: "logoX", update: "width - 40" },
    { name: "logoWidth", value: 0 },
    { name: "logoUrl" },
    { name: "logoAspect", value: true },
    { name: "chartSource" },
    { name: "chartTitle" },
    { name: "chartSubtitle" },
    { name: "projectLogoUrl" },
    ...filterSignals,
  ];
}
