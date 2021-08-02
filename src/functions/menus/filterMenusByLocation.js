import { camelCase } from "lodash";

import formatHierarchicalMenu from "@/pesayetu/functions/menus/formatHeirarchialMenu";
/**
 * Filter menus array by menu location.
 *
 * @author WebDevStudios
 * @param {Array} menus     The array of WP menus to filter.
 * @param {Array} locations The array of locations for filtering.
 * @return {object}         An object containing the requested locations as individual objects.
 */
export default function filterMenusByLocation(menus, locations) {
  const data = {};
  // Loop each menu location.
  locations.forEach((location) => {
    // Convert dashes to underscores.
    const locationName = location.replace(/-/g, "_");
    // Filter menus array by location and assign to new object.
    const wpmenu = menus?.filter((menu) => {
      return menu.locations.includes(locationName.toUpperCase());
    });
    // Format the returned menu.
    const camelLocation = camelCase(locationName);
    data[camelLocation] = formatHierarchicalMenu(wpmenu[0]?.menuItems?.nodes);
  });
  return data;
}
