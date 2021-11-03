import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import createChartImage from "@/pesayetu/lib/createChartImage";
import fetchProfile from "@/pesayetu/utils/fetchProfile";
import fetchProfileConfigurations from "@/pesayetu/utils/fetchProfileConfigurations";

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
        <Chart
          {...props}
          indicator={indicator}
          title={title}
          geoCode={geoCode}
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

export function getIndicatorsArray(data, parent) {
  return Object.keys(data).reduce((acc, label) => {
    const indicators = Object.keys(data[label]?.subcategories).reduce(
      (indiAcc, child) => {
        const indObj = Object.keys(
          data[label]?.subcategories[child]?.indicators ?? []
        ).map((indicator) => {
          return {
            index: `${indicator}-${data[label]?.subcategories[child]?.indicators[indicator]?.id}`,
            title: indicator,
            indicator: {
              ...data[label]?.subcategories?.[child]?.indicators?.[indicator],
              parentData: parent.data
                ? parent?.data?.[label]?.subcategories?.[child]?.indicators?.[
                    indicator
                  ]?.data ?? null
                : null,
              parentName: parent?.name ?? null,
            },
          };
        });
        return [...indiAcc, ...indObj];
      },
      []
    );
    return [...acc, ...indicators];
  }, []);
}

export async function getStaticProps({
  params: { geoCode: originalCode, chartId },
}) {
  const apiUri = process.env.HURUMAP_API_URL;
  const { locationCodes } = await fetchProfileConfigurations();
  const [primaryCode, secondaryCode] = originalCode
    .split("-vs-")
    .map((c) => c.trim().toLowerCase())
    .filter((c) => c);

  if (
    !(
      locationCodes.includes(primaryCode) &&
      (!secondaryCode || locationCodes.includes(secondaryCode))
    )
  ) {
    return {
      notFound: true,
    };
  }

  const {
    data: primaryProfileData,
    parent: primaryProfileParent,
    geography: { name: primaryName },
  } = await fetchProfile(apiUri, primaryCode);
  const primaryProfileIndicators = getIndicatorsArray(
    primaryProfileData,
    primaryProfileParent
  );
  const indicator = primaryProfileIndicators.find(
    (p) => p?.indicator?.id === parseInt(chartId, 10)
  );

  if (!indicator) {
    return {
      notFound: true,
    };
  }

  const profileNames = {
    primary: primaryName,
    secondary: "",
  };

  let title = indicator?.title ?? null;

  let secondaryIndicator = null;
  if (secondaryCode) {
    const {
      data: secondaryProfileData,
      parent: secondaryProfileParent,
      geography: { name: secondaryName },
    } = await fetchProfile(apiUri, secondaryCode);
    const secondaryProfileIndicators = getIndicatorsArray(
      secondaryProfileData,
      secondaryProfileParent
    );
    secondaryIndicator = secondaryProfileIndicators.find(
      (p) => p?.indicator?.id === parseInt(chartId, 10)
    );
    profileNames.secondary = secondaryName;

    title = title ? `${title} | ${primaryName} vs ${secondaryName}` : null;
  }

  const isCompare = !!secondaryCode;
  const image = await createChartImage(
    originalCode,
    chartId,
    indicator?.indicator,
    secondaryIndicator ?? { indicator: null },
    isCompare,
    profileNames
  );
  const url = `${process.env.NEXT_PUBLIC_APP_URL}embed/${originalCode}/${chartId}`;
  const openGraph = {
    title,
    description: indicator?.description ?? null,
    url,
    images: [{ url: image }],
  };
  const twitter = {
    cartType: "summary_large_image",
  };

  return {
    props: {
      description: indicator?.indicator?.description ?? null,
      geoCode: originalCode,
      indicator: indicator?.indicator ?? null,
      isCompare,
      openGraph,
      profileNames,
      secondaryIndicator: secondaryIndicator ?? { indicator: null },
      title,
      twitter,
    },
    revalidate: 60 * 5,
  };
}
