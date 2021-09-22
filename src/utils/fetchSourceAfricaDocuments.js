import fetchJson from "./fetchJson";

function formatDate(date) {
  try {
    return new Date(date).toISOString().substr(0, 4);
  } catch (e) {
    return date || null;
  }
}

async function extractDocuments(results) {
  return results.map((result) => {
    const {
      canonical_url: href,
      description,
      title,
      updated_at: updatedAt,
    } = result;
    return {
      date: formatDate(updatedAt),
      description,
      href,
      title,
    };
  });
}

async function fetchSourceAfricaDatasets(source) {
  const { href } = source;
  try {
    const url = new URL(href);
    if (
      process.env.NEXT_PUBLIC_SOURCEAFRICA_DOMAINS.split(",")
        .map((d) => d.trim())
        .includes(url.hostname)
    ) {
      const { pathname } = url;
      let apiPath;
      if (pathname.startsWith("/documents/") && pathname.endsWith(".html")) {
        apiPath = pathname.replace(/\.html$/, ".json");
      } else if (pathname.startsWith("/search/")) {
        // Both groups (/search/Group:GGG) and accounts (/search/Account:AAA)
        const search = pathname.replace(/\/$/, "");
        // We'll load a maximum of 25 documents from a group
        apiPath = `/api${search}.json?per_page=25`;
      }
      if (apiPath) {
        const json = await fetchJson(`${url.origin}${apiPath}`);
        // group documents are in json.documents while individual document
        // is in json
        // NOTE: by default,
        const results = json.documents || [json];
        return extractDocuments(results);
      }
    }
  } catch (e) {
    /* We'll return original source */
  }

  const { date, ...others } = source;
  return { ...others, date: formatDate(date) };
}

export default fetchSourceAfricaDatasets;
