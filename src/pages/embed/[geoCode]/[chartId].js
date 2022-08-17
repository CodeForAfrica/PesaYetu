import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Link from "@/pesayetu/components/Link";
import Page from "@/pesayetu/components/Page";
import Section from "@/pesayetu/components/Section";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import createChartImage from "@/pesayetu/lib/createChartImage";
import { fetchProfile, fetchProfileGeography } from "@/pesayetu/lib/hurumap";
import site from "@/pesayetu/utils/site";

const Chart = dynamic(() => import("@/pesayetu/components/HURUmap/Chart"), {
  ssr: false,
});

export default function Embed({
  chartId,
  geoCode,
  geoTitle,
  indicator,
  isCompare,
  profileNames,
  secondaryIndicator,
  title,
  ...props
}) {
  // Standalone = false implies in an iframe (default)
  const [standalone, setStandalone] = useState(false);
  useEffect(() => {
    const { self, top } = window;
    console.log("BOOM", { self, top });
    if (window.self === window.top) {
      setStandalone(true);
    }
  }, []);

  const PageWrapper = standalone ? Page : React.Fragment;
  const ChartWrapper = standalone ? Section : React.Fragment;
  const indicatorTitle = standalone ? (
    <>
      {`${title} | `}
      <Link underline="always" href={`/explore/${geoCode}`}>
        {geoTitle}
      </Link>
    </>
  ) : null;
  return (
    <PageWrapper {...(standalone && props)}>
      <ChartWrapper>
        <Chart
          geoCode={geoCode}
          indicator={indicator}
          indicatorTitle={indicatorTitle}
          isCompare={isCompare}
          profileNames={profileNames}
          secondaryIndicator={secondaryIndicator}
          title={`${title} | ${geoTitle}`}
        />
      </ChartWrapper>
    </PageWrapper>
  );
}

Embed.propTypes = {
  chartId: PropTypes.string,
  description: PropTypes.string,
  geoCode: PropTypes.string,
  geoTitle: PropTypes.string,
  image: PropTypes.string,
  indicator: PropTypes.shape({}),
  isCompare: PropTypes.bool,
  secondaryIndicator: PropTypes.shape({}),
  profileNames: PropTypes.shape({}),
  title: PropTypes.string,
};

Embed.defaultProps = {
  chartId: undefined,
  description: undefined,
  geoCode: undefined,
  geoTitle: undefined,
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
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    {
      slug: "explore",
    },
    "page"
  );
  if (notFound) {
    return {
      notFound,
    };
  }
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
  const title = primaryIndicator.title || "";
  let geoTitle = profileNames.primary || "";
  if (secondaryIndicator) {
    geoTitle = `${geoTitle} vs ${secondaryName}`;
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
      ...props,
      chartId,
      description,
      geoCode: originalCode,
      geoTitle,
      indicator: primaryIndicator?.indicator ?? null,
      isCompare,
      openGraph,
      profileNames,
      secondaryIndicator: secondaryIndicator ?? { indicator: null },
      title,
      variant: "explore",
    },
    revalidate,
  };
}
