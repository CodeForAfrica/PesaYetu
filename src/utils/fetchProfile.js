import fetchJson from "@/pesayetu/utils/fetchJson";

async function fetchProfile(apiUri, geoCode) {
  // HURUmap codes are uppercased in the API
  const json = await fetchJson(
    `${apiUri}all_details/profile/1/geography/${geoCode.toUpperCase()}/?format=json`
  );
  const { boundary, children, parent_layers: parents, themes } = json;
  const geometries = { boundary, children, parents, themes };
  const {
    profile_data: data,
    highlights: originalHighlights,
    overview,
    geography,
  } = json.profile;
  const highlights = originalHighlights.map(({ name, value }) => ({
    title: name,
    value,
  }));
  const tags = geography.parents
    .concat(geography)
    .map(({ code, level, name }) => ({
      code,
      level,
      name,
    }));

  return { data, geography, geometries, highlights, tags, overview };
}

export default fetchProfile;
