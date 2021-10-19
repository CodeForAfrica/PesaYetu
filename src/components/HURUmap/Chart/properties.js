import hoverIcon from "@/pesayetu/assets/icons/Component1375.png";
import theme from "@/pesayetu/theme";

export const xScale = {
  name: "xscale",
  type: "linear",
  domain: { data: "data_formatted", field: { signal: "datatype[Units]" } },
  domainMin: { signal: "domainMin" },
  domainMax: { signal: "domainMax" },
  range: [0, { signal: "width" }],
  clamp: true,
  nice: true,
};

export const xAxis = {
  orient: "bottom",
  scale: "xscale",
  bandPosition: 0,
  domainOpacity: 0.5,
  tickSize: 0,
  format: { signal: "numberFormat[Units]" },
  grid: true,
  labelPadding: 6,
};

export const defaultConfig = {
  axis: {
    labelColor: theme.palette.chart.text.primary,
    labelFont: theme.typography.fontFamily,
    labelFontSize: 11,
    gridColor: theme.palette.chart.text.primary,
    gridOpacity: 0.2,
  },
  axisBottom: {
    domainColor: "transparent",
  },
  legends: {
    layout: {
      direction: "horizontal",
    },
  },
  range: {
    category: theme.palette.chart.primary,
  },
};

export const commonSignal = [
  {
    name: "width",
    update: "containerSize()[0]",
    on: [{ events: "window:resize", update: "containerSize()[0]" }],
  },
  {
    name: "cursor",
    value: `url("${hoverIcon.src}"), pointer`,
  },
  {
    name: "x_step",
    value: 40,
  },
  {
    name: "y_step",
    value: 35,
  },
];

export const parentLegend = (label) => {
  return {
    fill: "pcolor",
    offset: -40,
    orient: "top-right",
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
      labels: {
        update: {
          text: { value: label },
        },
      },
    },
  };
};

export const stackedLegend = {
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
};
