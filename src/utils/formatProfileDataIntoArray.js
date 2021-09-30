import defaultIcon from "@/pesayetu/assets/icons/Group 4658-white.svg";

export default function formatProfileDataIntoArray(data) {
  return Object.keys(data).map((label) => {
    return {
      title: label,
      icon: data[label].icon ?? defaultIcon,
      description: data[label].description,
      children: Object.keys(data[label]?.subcategories).map((child) => {
        return {
          title: child,
          description: data[label]?.subcategories[child].description,
        };
      }),
    };
  });
}
