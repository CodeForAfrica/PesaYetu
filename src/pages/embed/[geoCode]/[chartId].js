import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import createChartImage from "@/pesayetu/lib/createChartImage";
import { fetchProfile, fetchProfileGeography } from "@/pesayetu/lib/hurumap";
import site from "@/pesayetu/utils/site";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

export default function Embed({
  geoCode,
  indicator,
  isCompare,
  profileNames,
  secondaryIndicator,
  title,
  ...props
}) {
  return (
    <>
      <NextSeo title={title} {...props} />
      <div>
        <Chart
          geoCode={geoCode}
          indicator={indicator}
          isCompare={isCompare}
          profileNames={profileNames}
          secondaryIndicator={secondaryIndicator}
          title={title}
        />
      </div>
    </>
  );
}

Embed.propTypes = {
  description: PropTypes.string,
  geoCode: PropTypes.string,
  image: PropTypes.string,
  indicator: PropTypes.shape({}),
  isCompare: PropTypes.bool,
  secondaryIndicator: PropTypes.shape({}),
  profileNames: PropTypes.shape({}),
  title: PropTypes.string,
};

Embed.defaultProps = {
  description: undefined,
  geoCode: undefined,
  image: undefined,
  indicator: undefined,
  isCompare: undefined,
  secondaryIndicator: undefined,
  profileNames: undefined,
  title: undefined,
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export function getIndicators(categories) {
  return categories
    .flatMap((category) => category.children)
    .flatMap((subcategory) => subcategory.children);
}

export async function getStaticProps({
  params: { geoCode: originalCode, chartId },
}) {
  const geoCodes = originalCode
    .split("-vs-")
    .map((c) => c.trim().toLowerCase())
    .filter((c) => c);
  const { locations } = await fetchProfile();
  const locationCodes = locations?.map(({ code }) => code) ?? [];
  if (!geoCodes.every((gC) => locationCodes.includes(gC))) {
    return {
      notFound: true,
    };
  }

  const [primaryCode, secondaryCode] = geoCodes;
  const {
    items: primaryProfileCategories,
    geography: { name: primaryName = "" },
  } = await fetchProfileGeography(primaryCode);
  const primaryProfileIndicators = getIndicators(primaryProfileCategories);
  let primaryIndicator = primaryProfileIndicators.find(
    (p) => p?.indicator?.id === parseInt(chartId, 10)
  );

  let secondaryIndicator = null;
  let secondaryName = "";
  if (secondaryCode) {
    const { items: secondaryProfileCategories, geography: secondaryGeography } =
      await fetchProfileGeography(secondaryCode);
    ({ name: secondaryName = "" } = secondaryGeography);
    const secondaryProfileIndicators = getIndicators(
      secondaryProfileCategories
    );
    secondaryIndicator = secondaryProfileIndicators.find(
      (p) => p?.indicator?.id === parseInt(chartId, 10)
    );
  }

  if (!(primaryIndicator || secondaryIndicator)) {
    return {
      notFound: true,
    };
  }

  const profileNames = {
    primary: primaryName,
    secondary: secondaryName,
  };
  // Primary **must always** exist but secondary is optional
  if (!primaryIndicator) {
    primaryIndicator = secondaryIndicator;
    profileNames.primary = secondaryName;
    profileNames.secondary = primaryName;
    secondaryIndicator = null;
  }
  let title = `${primaryIndicator.title || ""} | ${profileNames.primary}`;
  if (secondaryIndicator) {
    title = `${title} vs ${secondaryName}`;
  }
  const description = primaryIndicator.indicator?.description ?? null;

  const isCompare = !!secondaryCode;
  const image = await createChartImage(
    originalCode,
    chartId,
    primaryIndicator.indicator,
    secondaryIndicator ?? { indicator: null },
    isCompare,
    profileNames
  );
  const url = new URL(
    `/embed/${originalCode}/${chartId}`,
    site.environmentUrl
  ).toString();
  const openGraph = {
    url,
    images: [{ ...image, alt: title }],
  };

  return {
    props: {
      description,
      geoCode: originalCode,
      indicator: primaryIndicator?.indicator ?? null,
      isCompare,
      openGraph,
      profileNames,
      secondaryIndicator: secondaryIndicator ?? { indicator: null },
      title,
    },
    revalidate: 60 * 5,
  };
}
