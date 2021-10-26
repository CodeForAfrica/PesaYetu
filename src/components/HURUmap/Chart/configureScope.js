import BarChartScope from "./BarChartScope";
import DonutChartScope from "./DonutChartScope";
import LineChartScope from "./LineChartScope";
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
    parentLabel: indicator?.parentName
      ? `${indicator?.parentName} data`
      : undefined,
  };

  const showParent = configuration?.show_parent ?? false;

  let vegaSpec;
  const chartType = configuration?.chart_type?.toLowerCase();
  switch (chartType) {
    case "line":
      vegaSpec = LineChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration,
        secondaryIndicator?.data,
        showParent ? indicator?.parentData : [{}],
        showParent ? secondaryIndicator?.parentData : [{}],
        profileNames,
        false
      );
      break;
    case "donut":
      vegaSpec = DonutChartScope(
        indicator?.data,
        indicator?.metadata,
        configuration
      );
      break;
    case "treemap":
      vegaSpec = TreemapChartScope(
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
          configuration,
          showParent ? indicator?.parentData : [{}]
        );
      } else {
        vegaSpec = StackedChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          showParent ? indicator?.parentData : [{}]
        );
      }
      break;
    default:
      if (isMobile) {
        vegaSpec = VerticalBarChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          showParent ? indicator?.parentData : [{}]
        );
      } else {
        vegaSpec = BarChartScope(
          indicator?.data,
          indicator?.metadata,
          configuration,
          secondaryIndicator?.data ?? null,
          showParent ? indicator?.parentData : [{}],
          showParent ? secondaryIndicator?.parentData : [{}],
          profileNames,
          false
        );
      }
      break;
  }

  return vegaSpec;
}
