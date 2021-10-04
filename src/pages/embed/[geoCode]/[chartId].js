import dynamic from "next/dynamic";
import React from "react";

import fetchJson from "@/pesayetu/utils/fetchJson";

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
  return {
    paths: [],
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
