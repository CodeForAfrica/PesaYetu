export default async function fetcher(...options) {
  return fetch(...options).then((res) => res.json());
}
