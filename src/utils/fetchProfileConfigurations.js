import fetchJson from "./fetchJson";

export default async function fetchProfileConfigurations() {
  const apiUri = process.env.HURUMAP_API_URL;
  const { configuration } = await fetchJson(`${apiUri}profiles/1/?format=json`);

  const locationCodes = (
    Object.keys(configuration?.featured_geographies)?.reduce((acc, v) => {
      return acc.concat(configuration?.featured_geographies[v]);
    }, []) || []
  ).map((l) => l.toLowerCase());

  return { locationCodes, preferredChildren: configuration.preferred_children };
}
