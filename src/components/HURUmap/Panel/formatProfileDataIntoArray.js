import defaultIcon from "@/pesayetu/assets/icons/Group 4658-white.svg";

export default function formatData(data) {
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
              indicator:
                data[label]?.subcategories[child]?.indicators[indicator],
            };
          }),
        };
      }),
    };
  });
}
