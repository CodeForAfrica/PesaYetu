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
import SupportingPartners from "@/pesayetu/components/SupportingPartners";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import { fetchProfile, fetchProfileGeography } from "@/pesayetu/lib/hurumap";

export default function Home({ boundary, blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.hero} boundary={boundary} />
      <HowItWorks {...blocks?.howItWorks} />
      <DataVisualisationGuide {...blocks?.dataVisualisationGuide} />
      <StoriesInsights {...blocks?.insightsStories} />
      <DataIndicators {...blocks?.dataIndicators} />
      <InsightData {...blocks?.dataInsights} />
      <Project {...blocks?.partnersAndNewsletter} />
      <SupportingPartners {...blocks?.supportingPartners} />
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
    supportingPartners: PropTypes.shape({}),
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

  const blocks = await formatBlocksForSections(props?.post?.blocks);
  const {
    geometries: { children },
  } = await fetchProfileGeography("ke");
  const { locations } = await fetchProfile();
  const featuredCounties = locations.filter(({ level }) => level === "county");

  return {
    props: {
      ...props,
      blocks: {
        ...blocks,
        hero: {
          ...(blocks?.hero ?? {}),
          featuredCounties,
        },
      },
      boundary: children?.county,
    },
    revalidate,
  };
}
