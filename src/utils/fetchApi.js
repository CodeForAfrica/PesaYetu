export default async function fetchAPI(...options) {
  return fetch(...options)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.status || res.statusText);
      }
      return res;
    })
    .then((res) => res.json());
}
