import embed from "vega-embed";

import configureDonutchart from "./donutScope";
import configureBarchart from "./scope";

export default function renderChart(container, indicator) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;

  if (configuration?.chart_type === "donut") {
    vegaSpec = configureDonutchart(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else {
    vegaSpec = configureBarchart(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  }

  return embed(container, vegaSpec, { renderer: "svg", actions: false });
}
