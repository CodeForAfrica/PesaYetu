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
  gridOpacity: 0.5,
  labelOpacity: 0.5,
  labelPadding: 6,
};

export const defaultConfig = {
  axis: {
    labelColor: theme.palette.chart.text,
    labelFont: theme.typography.fontFamily,
    labelFontSize: 11,
  },
  axisBottom: {
    domainColor: "transparent",
  },
  range: {
    category: theme.palette.chart.category,
  },
};
