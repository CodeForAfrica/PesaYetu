import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import createChartImage from "@/pesayetu/lib/createChartImage";
import fetchJson from "@/pesayetu/utils/fetchJson";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

export default function Embed({
  description,
  geoCode,
  image,
  indicator,
  title,
  ...props
}) {
  return (
    <>
      <NextSeo
        description={description}
        image={image}
        title={title}
        {...props}
      />
      <div>
        <Chart indicator={indicator} title={title} geoCode={geoCode} />
      </div>
    </>
  );
}

Embed.propTypes = {
  description: PropTypes.string,
  geoCode: PropTypes.string,
  image: PropTypes.string,
  indicator: PropTypes.shape({}),
  title: PropTypes.string,
};

Embed.defaultProps = {
  description: undefined,
  geoCode: undefined,
  image: undefined,
  indicator: undefined,
  title: undefined,
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { geoCode: code, chartId } }) {
  const apiUri = process.env.HURUMAP_API_URL;
  const { indicator: foundIndicator } = await fetchJson(
    `${apiUri}profile/1/geography/${code.toUpperCase()}/indicator/${chartId}/?format=json`
  );

  if (
    !foundIndicator ||
    JSON.stringify(foundIndicator) === "{}" ||
    Object.keys(foundIndicator)?.length === 0
  ) {
    return {
      notFound: true,
    };
  }

  const description = foundIndicator.description || null;
  const geoCode = foundIndicator?.geography_code ?? null;
  const indicator = {
    ...foundIndicator,
    chart_configuration: foundIndicator?.indicator_chart_configuration ?? null,
    id: foundIndicator?.profile_indicator_id ?? null,
    metadata: {
      source: foundIndicator?.metadata_source ?? null,
      url: foundIndicator?.metadata_url ?? null,
      primary_group: foundIndicator?.primary_group?.length
        ? foundIndicator?.primary_group[0]
        : null,
      groups: Object.keys(foundIndicator?.data?.[0] || {})
        .filter((g) => g !== "count")
        ?.map((g) => {
          return { name: g };
        }),
    },
  };
  const title = foundIndicator?.profile_indicator_label ?? null;
  const image = await createChartImage(geoCode, chartId, indicator);
  const url = `${process.env.NEXT_PUBLIC_APP_URL}embed${geoCode}/${chartId}`;
  const openGraph = {
    title,
    description,
    url,
    images: [{ url: image }],
  };
  const twitter = {
    cartType: "summary_large_image",
  };

  return {
    props: {
      description,
      geoCode,
      indicator,
      openGraph,
      title,
      twitter,
    },
    revalidate: 60 * 5,
  };
}
