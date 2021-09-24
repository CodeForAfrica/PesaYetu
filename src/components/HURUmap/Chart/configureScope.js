import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import StackedChartScope from "./StackedChartScope";

export default function configureScope(indicator) {
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

  return vegaSpec;
}
