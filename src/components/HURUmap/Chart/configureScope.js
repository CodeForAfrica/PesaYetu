import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import StackedChartScope from "./StackedChartScope";
import VerticalBarChartScope from "./VerticalBarChartScope";
import VerticalStackedChartScope from "./VerticalStackedChartScope";

export default function configureScope(indicator, isMobile) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;

  if (configuration?.chart_type === "donut") {
    vegaSpec = DonutChartScope(
      indicator?.data,
      indicator?.metadata,
      configuration
    );
  } else if (configuration?.chart_type === "stacked") {
    if (isMobile) {
      vegaSpec = VerticalStackedChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration
      );
    } else {
      vegaSpec = StackedChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration
      );
    }
  } else if (isMobile) {
    vegaSpec = VerticalBarChartScope(
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