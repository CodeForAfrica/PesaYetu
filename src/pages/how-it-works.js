import PropTypes from "prop-types";
import React from "react";

import Metrics from "@/pesayetu/components/Metrics";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import PartnersAndNewsletter from "@/pesayetu/components/Partners";
import StartLearning from "@/pesayetu/components/StartLearning";
import Summary from "@/pesayetu/components/Summary";
import SupportingPartners from "@/pesayetu/components/SupportingPartners";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ blocks, ...props }) {
  const metricsProps = {
    title: blocks?.metrics.title,
    items: blocks?.metrics.items,
  };
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <Metrics {...metricsProps} />
      <Summary {...blocks?.summary} />
      <StartLearning {...blocks?.startLearning} />
      <PartnersAndNewsletter {...blocks?.partnersAndNewsletter} />
      <SupportingPartners {...blocks?.supportingPartners} />
    </Page>
  );
}

Home.propTypes = {
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    metrics: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf({}),
    }),
    startLearning: PropTypes.shape({}),
    supportingPartners: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
    summary: PropTypes.shape({}),
  }),
};

Home.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "how-it-works" },
    postType,
    preview,
    previewData
  );

  if (notFound) {
    return {
      notFound,
    };
  }

  const blocks = formatBlocksForSections(props?.post?.blocks);

  return {
    props: {
      ...props,
      blocks,
    },
    revalidate,
  };
}
