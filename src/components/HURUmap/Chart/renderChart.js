import embed from "vega-embed";

import BarChartScope from "./BarChartScope";
import DonutChartScope from "./donutChartScope";
import StackedChartScope from "./stackedChartScope";

export default function renderChart(container, indicator) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;

  if (configuration?.chart_type === "donut") {
    vegaSpec = DonutChartScope(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else if (configuration?.chart_type === "stacked") {
    vegaSpec = StackedChartScope(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else {
    vegaSpec = BarChartScope(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  }

  return embed(container, vegaSpec, { renderer: "svg", actions: false });
}
