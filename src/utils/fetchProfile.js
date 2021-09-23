import fetchJson from "./fetchJson";
import formatNumericalValue from "./formatNumericalValue";

async function fetchProfile(apiUri, geoCode) {
  // HURUmap codes are uppercased in the API
  const json = await fetchJson(
    `${apiUri}all_details/profile/1/geography/${geoCode.toUpperCase()}/?format=json`
  );
  const { configuration } = await fetchJson(
    `${process.env.HURUMAP_API_URL}profile_by_url/?format=json`
  );
  const { boundary, children, parent_layers: parents, themes } = json;
  const geometries = { boundary, children, parents, themes };
  const {
    profile_data: data,
    highlights: originalHighlights,
    overview,
    geography,
  } = json.profile;
  const highlights = originalHighlights.map(({ label, ...other }) => ({
    ...other,
    formattedValue: formatNumericalValue(other),
    title: label,
  }));
  const tags = geography.parents
    .concat(geography)
    .map(({ code, level, name }) => ({
      code,
      level,
      name,
    }));

  return {
    data,
    geography,
    geometries,
    highlights,
    tags,
    overview,
    preferredChildren: configuration?.preferred_children,
    featuredGeographies: configuration?.featured_geographies,
  };
}

export default fetchProfile;
