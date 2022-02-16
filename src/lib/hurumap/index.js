import defaultIcon from "@/pesayetu/assets/icons/Group 4658-white.svg";
import { hurumap } from "@/pesayetu/config";
import fetchJson from "@/pesayetu/utils/fetchJson";
import formatNumericalValue from "@/pesayetu/utils/formatNumericalValue";

const apiUrl = process.env.HURUMAP_API_URL || hurumap?.api?.url;

export async function fetchProfile() {
  const { configuration } = await fetchJson(
    new URL("/api/v1/profiles/1/?format=json", apiUrl)
  );

  const locationCodes = (
    Object.keys(configuration?.featured_geographies)?.reduce((acc, v) => {
      return acc.concat(configuration?.featured_geographies[v]);
    }, []) || []
  ).map((l) => l.toLowerCase());

  return { locationCodes, preferredChildren: configuration.preferred_children };
}

function formatProfileGeographyData(data, parent) {
  if (!data) {
    return null;
  }
  return Object.keys(data)
    .map((label) => {
      return {
        title: label,
        icon: data[label].icon ?? defaultIcon,
        description: data[label].description,
        children: Object.keys(data[label]?.subcategories)
          .map((child) => {
            return {
              title: child,
              description: data[label]?.subcategories[child].description,
              children: Object.keys(
                data[label]?.subcategories[child]?.indicators ?? []
              )
                .map((indicator) => {
                  return {
                    index: `${indicator}-${data[label]?.subcategories[child]?.indicators[indicator]?.id}`,
                    title: indicator,
                    indicator: {
                      ...data[label]?.subcategories?.[child]?.indicators?.[
                        indicator
                      ],
                      parentData: parent.data
                        ? parent?.data?.[label]?.subcategories?.[child]
                            ?.indicators?.[indicator]?.data ?? null
                        : null,
                      parentName: parent?.name ?? null,
                    },
                  };
                })
                .filter((indic) => indic.indicator?.data),
              metrics: (
                data[label]?.subcategories[child]?.key_metrics ?? []
              ).map((m, index) => {
                return {
                  ...m,
                  parentName: parent?.name ?? null,
                  parentMetric:
                    parent.data &&
                    parent?.data[label]?.subcategories[child]?.key_metrics
                      ? parent?.data[label]?.subcategories[child]?.key_metrics[
                          index
                        ] ?? null
                      : null,
                };
              }),
            };
          })
          .filter(
            (subcategory) =>
              subcategory.children.length || subcategory.metrics.length
          ),
      };
    })
    .filter((category) => category.children.length);
}

export async function fetchProfileGeography(geoCode) {
  // HURUmap codes are uppercased in the API
  const json = await fetchJson(
    new URL(
      `/api/v1/all_details/profile/1/geography/${geoCode.toUpperCase()}/?format=json`,
      apiUrl
    )
  );
  const { boundary, children, parent_layers: parents } = json;
  const geometries = { boundary, children, parents };
  const {
    profile_data: data,
    highlights: originalHighlights,
    overview,
    geography,
  } = json.profile;
  const highlights = originalHighlights.map(({ label, ...other }) => ({
    ...other,
    formattedValue: formatNumericalValue(other),
    title: label,
  }));
  const tags = geography.parents
    .concat(geography)
    .map(({ code, level, name }) => ({
      code,
      level,
      name,
    }));

  const parent = {};
  const { code: parentCode, name } =
    geography.parents[geography.parents.length - 1] || {};

  if (parentCode) {
    const parentJson = await fetchJson(
      new URL(
        `/api/v1/all_details/profile/1/geography/${parentCode.toUpperCase()}/?format=json`,
        apiUrl
      )
    );
    parent.data = parentJson.profile.profile_data;
    parent.name = name;
  }

  return {
    data,
    geography,
    geometries,
    highlights,
    tags,
    overview,
    parent,
    items: formatProfileGeographyData(data, parent),
  };
}
