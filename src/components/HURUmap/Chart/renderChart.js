import embed from "vega-embed";

import configureBarchart from "./scope";

export default function renderChart(container, indicator) {
  const configuration = indicator?.chart_configuration;

  const vegaSpec = configureBarchart(
    indicator?.data,
    indicator?.metadata,
    configuration
  );

  return embed(container, vegaSpec, { renderer: "svg", actions: false });
}
