import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import LineChartScope from "./LineChartScope";
import MultiBarChartScope from "./MultiBarChartScope";
import MultiDonutChartScope from "./MultiDonutChartScope";
import MultiLineChartScope from "./MultiLineChartScope";
import MultiStackedChartScope from "./MultiStackedChartScope";
import MultiTreemapChartScope from "./MultiTreemapChartScope";
import StackedChartScope from "./StackedChartScope";
import TreemapChartScope from "./TreemapChartScope";
import VerticalBarChartScope from "./VerticalBarChartScope";
import VerticalStackedChartScope from "./VerticalStackedChartScope";

export default function configureScope(
  indicator,
  isMobile,
  secondaryIndicator,
  profileNames
) {
  const configuration = {
    ...indicator?.chart_configuration,
    parentLabel: `${indicator?.parentName} data`,
  };

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
          profileNames
        );
        break;
      case "stacked":
        vegaSpec = MultiStackedChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          profileNames
        );
        break;
      case "donut":
        vegaSpec = MultiDonutChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          profileNames
        );
        break;
      case "treemap":
        vegaSpec = MultiTreemapChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          profileNames
        );
        break;
      default:
        vegaSpec = MultiBarChartScope(
          indicator?.data,
          secondaryIndicator?.data,
          indicator?.metadata,
          configuration,
          profileNames
        );
        break;
    }
  } else {
    switch (chartType) {
      case "line":
        vegaSpec = LineChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          indicator?.parentData ?? [{}]
        );
        break;
      case "donut":
        vegaSpec = DonutChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          indicator?.parentData ?? [{}]
        );
        break;
      case "treemap":
        vegaSpec = TreemapChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          indicator?.parentData ?? [{}]
        );
        break;
      case "stacked":
        if (isMobile) {
          vegaSpec = VerticalStackedChartScope(
            indicator?.data,
            indicator?.metadata,
            configuration,
            indicator?.parentData ?? [{}]
          );
        } else {
          vegaSpec = StackedChartScope(
            indicator?.data,
            indicator?.metadata,
            configuration,
            indicator?.parentData ?? [{}]
          );
        }
        break;
      default:
        if (isMobile) {
          vegaSpec = VerticalBarChartScope(
            indicator?.data,
            indicator?.metadata,
            configuration,
            indicator?.parentData ?? [{}]
          );
        } else {
          vegaSpec = BarChartScope(
            indicator?.data,
            indicator?.metadata,
            configuration,
            indicator?.parentData ?? [{}]
          );
        }
        break;
    }
  }

  return vegaSpec;
}
