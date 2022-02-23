async function fetchJson(resource, init) {
  return fetch(resource, init).then((res) => res.json());
}

export default fetchJson;
