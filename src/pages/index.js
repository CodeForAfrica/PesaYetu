import PropTypes from "prop-types";
import React from "react";

import DataIndicators from "@/pesayetu/components/DataIndicators";
import DataVisualisationGuide from "@/pesayetu/components/DataVisualisationGuide";
import ExploreOtherTools from "@/pesayetu/components/ExploreOtherTools";
import Hero from "@/pesayetu/components/Hero";
import HowItWorks from "@/pesayetu/components/HowItWorks";
import InsightData from "@/pesayetu/components/InsightsData";
import Page from "@/pesayetu/components/Page";
import Project from "@/pesayetu/components/Project";
import StoriesInsights from "@/pesayetu/components/StoriesInsights";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import fetchJson from "@/pesayetu/utils/fetchJson";

export default function Home({ boundary, blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks.hero} boundary={boundary} />
      <HowItWorks {...blocks?.howItWorks} />
      <DataVisualisationGuide {...blocks?.dataVisualisationGuide} />
      <StoriesInsights {...blocks?.insightsStories} />
      <DataIndicators {...blocks.dataIndicators} />
      <InsightData {...blocks?.dataInsights} />
      <Project {...blocks?.partnersAndNewsletter} />
      <ExploreOtherTools {...blocks?.exploreOtherTools} />
    </Page>
  );
}

Home.propTypes = {
  boundary: PropTypes.shape({}),
  blocks: PropTypes.shape({
    hero: PropTypes.shape({}),
    howItWorks: PropTypes.shape({}),
    exploreOtherTools: PropTypes.shape({}),
    insightsStories: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
    dataInsights: PropTypes.shape({}),
    dataVisualisationGuide: PropTypes.shape({}),
    dataIndicators: PropTypes.shape({}),
  }),
  footerProps: PropTypes.shape({}),
};

Home.defaultProps = {
  boundary: undefined,
  blocks: undefined,
  footerProps: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "/" },
    postType,
    preview,
    previewData
  );

  if (notFound) {
    return {
      notFound,
    };
  }

  const res = await fetchJson(
    `${process.env.HURUMAP_API_URL}all_details/profile/1/geography/KE/?format=json`
  );

  const { children } = res;

  const blocks = formatBlocksForSections(props?.post?.blocks);

  const { configuration } = await fetchJson(
    `${process.env.HURUMAP_API_URL}profile_by_url/?format=json`
  );

  const featuredCounties = configuration?.featured_geographies?.county;

  return {
    props: {
      ...props,
      blocks: {
        ...blocks,
        hero: {
          ...blocks.hero,
          featuredCounties,
        },
      },
      boundary: children?.county,
    },
    revalidate,
  };
}
