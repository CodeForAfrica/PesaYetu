import hoverIcon from "@/pesayetu/assets/icons/Component1375.png";
import { hurumapArgs } from "@/pesayetu/config";
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
  const formatting = hurumapArgs.chartFormatting;

  const valueFormatting = config?.types?.Value?.formatting ?? formatting.value;
  const percentageFormatting =
    config?.types?.Percentage?.formatting ?? formatting.percentage;

  const valueMaxX = config?.types?.Value?.maxX ?? undefined;
  const valueMinX = config?.types?.Value?.minX ?? undefined;
  const percentageMinX = config?.types?.Percentage?.maxX ?? undefined;
  const percentageMaxX = config?.types?.Percentage?.minX ?? undefined;

  const defaultType = config?.defaultType ?? "Value";
  const xTicks = config?.xTicks ?? 6;
  const yTicks = config?.yTicks ?? 6;

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
      value: graphValueTypes[defaultType],
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
      value: percentageFormatting,
    },
    {
      name: "valueFormatting",
      value: valueFormatting,
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
    // tickCount signals
    {
      name: "xTicks",
      value: xTicks,
    },
    {
      name: "yTicks",
      value: yTicks,
    },
    {
      name: "maxXScaleValue",
      update: "extent(domain('xscale'))[1]",
    },
    {
      name: "maxYScaleValue",
      update: "extent(domain('yscale'))[1]",
    },
    {
      name: "maxSecondaryXScaleValue",
      update: "extent(domain('s_xscale'))[1]",
    },
    {
      name: "maxSecondaryYScaleValue",
      update: "extent(domain('s_yscale'))[1]",
    },
    // if the maximum value of xaxis is less than xTicks return maximum value as tick Count
    {
      name: "primaryXTickCount",
      update: "maxXScaleValue < xTicks ? maxXScaleValue : xTicks",
    },
    {
      name: "primaryYTickCount",
      update: "maxYScaleValue < yTicks ? maxYScaleValue : yTicks",
    },
    {
      name: "secondaryXTickCount",
      update:
        "maxSecondaryXScaleValue < xTicks ? maxSecondaryXScaleValue : xTicks",
    },
    {
      name: "secondaryYTickCount",
      update:
        "maxSecondaryYScaleValue < yTicks ? maxSecondaryYScaleValue : yTicks",
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
    { name: "subtitleY", update: "titleH - 10" },
    { name: "subtitlefontSize", value: 10 },
    { name: "subtitlefont", value: theme.typography.fontFamily },
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
