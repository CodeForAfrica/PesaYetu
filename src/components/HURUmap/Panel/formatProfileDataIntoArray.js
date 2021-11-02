import defaultIcon from "@/pesayetu/assets/icons/Group 4658-white.svg";

export default function formatProfileDataIntoArray(data, parent) {
  if (!data) {
    return null;
  }
  return Object.keys(data).map((label) => {
    return {
      title: label,
      icon: data[label].icon ?? defaultIcon,
      description: data[label].description,
      children: Object.keys(data[label]?.subcategories).map((child) => {
        return {
          title: child,
          description: data[label]?.subcategories[child].description,
          children: Object.keys(
            data[label]?.subcategories[child]?.indicators ?? []
          ).map((indicator) => {
            return {
              index: `${indicator}-${data[label]?.subcategories[child]?.indicators[indicator]?.id}`,
              title: indicator,
              indicator: {
                ...data[label]?.subcategories?.[child]?.indicators?.[indicator],
                parentData: parent.data
                  ? parent?.data?.[label]?.subcategories?.[child]?.indicators?.[
                      indicator
                    ]?.data ?? null
                  : null,
                parentName: parent?.name ?? null,
              },
            };
          }),
          metrics: (data[label]?.subcategories[child]?.key_metrics ?? []).map(
            (m, index) => {
              return {
                ...m,
                parentName: parent?.name ?? null,
                parentMetric: parent.data
                  ? parent?.data[label]?.subcategories[child]?.key_metrics[
                      index
                    ] ?? null
                  : null,
              };
            }
          ),
        };
      }),
    };
  });
}
