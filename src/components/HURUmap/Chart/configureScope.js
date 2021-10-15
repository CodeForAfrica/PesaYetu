import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import LineChartScope from "./LineChartScope";
import StackedChartScope from "./StackedChartScope";
import TreemapChartScope from "./TreemapChartScope";
import VerticalBarChartScope from "./VerticalBarChartScope";
import VerticalStackedChartScope from "./VerticalStackedChartScope";

export default function configureScope(indicator, isMobile) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;
  const chartType = configuration?.chart_type?.toLowerCase();

  switch (chartType) {
    case "line":
      vegaSpec = LineChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration,
        indicator?.parent_data ?? [{}]
      );
      break;
    case "donut":
      vegaSpec = DonutChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration
      );
      break;
    case "stacked":
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
      break;
    case "treemap":
      vegaSpec = TreemapChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration
      );
      break;
    default:
      if (isMobile) {
        vegaSpec = VerticalBarChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration
        );
      } else {
        vegaSpec = BarChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          indicator?.parent_data ?? [{}]
        );
      }
      break;
  }

  return vegaSpec;
}
