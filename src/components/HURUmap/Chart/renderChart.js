import embed from "vega-embed";

import configureDonutChart from "./donutScope";
import configureBarChart from "./scope";
import configureStackedBarChart from "./stackedBarScope";

export default function renderChart(container, indicator) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;

  if (configuration?.chart_type === "donut") {
    vegaSpec = configureDonutChart(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else if (configuration?.chart_type === "stacked") {
    vegaSpec = configureStackedBarChart(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else {
    vegaSpec = configureBarChart(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  }

  return embed(container, vegaSpec, { renderer: "svg", actions: false });
}
