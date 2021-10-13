import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import LineChartScope from "./LineChartScope";
import MultiBarChartScope from "./MultiBarChartScope";
import MultiDonutChartScope from "./MultiDonutChartScope";
import MultiLineChartScope from "./MultiLineChartScope";
import MultiStackedChartScope from "./MultiStackedChartScope";
import StackedChartScope from "./StackedChartScope";
import VerticalBarChartScope from "./VerticalBarChartScope";
import VerticalStackedChartScope from "./VerticalStackedChartScope";

export default function configureScope(
  indicator,
  isMobile,
  secondaryIndicator,
  extra
) {
  const configuration = indicator?.chart_configuration;

  let vegaSpec;
  const chartType = configuration?.chart_type?.toLowerCase();
  if (secondaryIndicator) {
    switch (chartType) {
      case "line":
        vegaSpec = MultiLineChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          extra
        );
        break;
      case "stacked":
        vegaSpec = MultiStackedChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          extra
        );
        break;
      case "donut":
        vegaSpec = MultiDonutChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          extra
        );
        break;
      default:
        vegaSpec = MultiBarChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          extra
        );
        break;
    }
  } else {
    switch (chartType) {
      case "line":
        vegaSpec = LineChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration
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
            configuration
          );
        }
        break;
    }
  }

  return vegaSpec;
}
