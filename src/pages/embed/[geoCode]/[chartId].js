import dynamic from "next/dynamic";
import React from "react";

import fetchJson from "@/pesayetu/utils/fetchJson";
import fetchProfile from "@/pesayetu/utils/fetchProfile";
import fetchProfileConfigurations from "@/pesayetu/utils/fetchProfileConfigurations";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

export default function Embed(props) {
  return (
    <div>
      <Chart {...props} />
    </div>
  );
}

export async function getStaticPaths() {
  const apiUri = process.env.HURUMAP_API_URL;
  const { locationCodes } = await fetchProfileConfigurations();
  const { data } = await fetchProfile(apiUri, "KE");

  const subcategories = Object.values(data)?.map((l) => l.subcategories);
  const profileIndicators = subcategories.reduce((acc, subcat) => {
    const indicatorIds = Object.values(subcat).reduce((b, m) => {
      let mIndicatorIds = [];
      if (m?.indicators) {
        mIndicatorIds = Object.values(m.indicators).map(({ id }) => id);
      }
      return b.concat(mIndicatorIds);
    }, []);

    return acc.concat(indicatorIds);
  }, []);

  const paths = locationCodes.reduce((acc, locationCode) => {
    return acc.concat(
      profileIndicators.map((pi) => {
        return {
          params: { geoCode: locationCode.toString(), chartId: pi.toString() },
        };
      })
    );
  }, []);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { geoCode, chartId } }) {
  const apiUri = process.env.HURUMAP_API_URL;
  const { indicator } = await fetchJson(
    `${apiUri}profile/1/geography/${geoCode.toUpperCase()}/indicator/${chartId}/?format=json`
  );

  if (
    !indicator ||
    JSON.stringify(indicator) === "{}" ||
    Object.keys(indicator)?.length === 0
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: indicator?.profile_indicator_label ?? null,
      indicator: {
        ...indicator,
        chart_configuration: indicator?.indicator_chart_configuration ?? null,
        id: indicator?.profile_indicator_id ?? null,
        metadata: {
          source: indicator?.metadata_source ?? null,
          url: indicator?.metadata_url ?? null,
          primary_group: indicator?.primary_group?.length
            ? indicator?.primary_group[0]
            : null,
          groups: Object.keys(indicator?.data?.length ? indicator?.data[0] : {})
            .filter((g) => g !== "count")
            ?.map((g) => {
              return { name: g };
            }),
        },
      },
      geoCode: indicator?.geography_code ?? null,
      embed: true,
    },
    revalidate: 60 * 5,
  };
}
