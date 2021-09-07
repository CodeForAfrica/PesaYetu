export default async function fetchAPI(...options) {
  return fetch(...options).then((res) => res.json());
}
