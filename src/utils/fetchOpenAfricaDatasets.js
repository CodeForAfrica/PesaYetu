import fetchJson from "./fetchJson";

const DATASET_API_PATH = "/api/3/action/package_show?id=";
const GROUP_API_PATH = "/api/3/action/package_search?fq=groups:";

function formatDate(date) {
  try {
    return `Updated: ${new Date(date).toISOString().substr(0, 10)}`;
  } catch (e) {
    return date || null;
  }
}

async function extractDatasets(origin, results) {
  return results.map((result) => {
    const {
      metadata_modified: updatedAt,
      name,
      notes: description,
      title,
    } = result;
    const types = [...new Set(result.resources?.map(({ format }) => format))];
    return {
      date: formatDate(updatedAt),
      description,
      href: `${origin}/dataset/${name}`,
      title,
      type: "dataset",
      types,
    };
  });
}

async function fetchOpenAfricaDatasets(source) {
  const { href } = source;
  try {
    const url = new URL(href);
    if (
      process.env.NEXT_PUBLIC_OPENAFRICA_DOMAINS.split(",")
        .map((d) => d.trim())
        .includes(url.hostname)
    ) {
      const { pathname } = url;
      let apiPath;
      if (pathname.startsWith("/dataset/")) {
        const id = pathname.replace("/dataset/", "").split("/")[0];
        if (id) {
          apiPath = `${DATASET_API_PATH}${id}`;
        }
      } else if (pathname.startsWith("/group/")) {
        const groups = pathname.replace("/group/", "").split("/")[0];
        if (groups) {
          apiPath = `${GROUP_API_PATH}${groups}`;
        }
      }
      if (apiPath) {
        const json = await fetchJson(`${url.origin}${apiPath}`);
        // group datasets are in result.results while individual dataset
        // is in result
        const results = json.result.results || [json.result];
        return extractDatasets(url.origin, results);
      }
    }
  } catch (e) {
    /* We'll return original source */
  }

  const { date, ...others } = source;
  return { ...others, date: formatDate(date) };
}

export default fetchOpenAfricaDatasets;
