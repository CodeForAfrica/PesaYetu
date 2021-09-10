import filterMenusByLocation from "@/pesayetu/functions/menus/filterMenusByLocation";
import menuLocations from "@/pesayetu/lib/wordpress/_config/menuLocations";
import fetchJson from "@/pesayetu/utils/fetchJson";

/**
 * Get menu data from WPGraphQL.
 *
 * @param  {object} menus     Query response menu data.
 * @param  {Array}  locations The menu locations as an array.
 * @return {Array}            Returns array of menu objects.
 */
export default async function getMenus(menus, locations = menuLocations) {
  if (!locations.length > 0) {
    return []; // Exit if empty.
  }

  // Filter returned menus by specific menu location.
  const filteredMenus = filterMenusByLocation(menus?.nodes, locations);

  const res = await fetchJson(
    `${process.env.HURUMAP_API_URL}all_details/profile/1/geography/KE/?format=json`
  );
  const { children } = res;

  filteredMenus.counties = children?.county?.features?.map(
    ({ properties }) => properties
  );

  return filteredMenus || [];
}
