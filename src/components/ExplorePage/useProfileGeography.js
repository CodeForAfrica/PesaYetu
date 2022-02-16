import useSWR from "swr";

import fetchJson from "@/pesayetu/utils/fetchJson";

function useProfileGeography(shouldFetch) {
  const fetcher = (url) => {
    return fetchJson(url);
  };
  const { data, error } = useSWR(shouldFetch, fetcher);

  return {
    data,
    isLoading: shouldFetch() && !(error || data),
    isError: error,
  };
}

export default useProfileGeography;
