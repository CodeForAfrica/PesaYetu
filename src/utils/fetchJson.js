export default async function fetchJson(...options) {
  return fetch(...options).then((res) => res.json());
}
