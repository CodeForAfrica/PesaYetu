import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/AboutHero";
import AboutTeam from "@/pesayetu/components/AboutTeam";
import DataIndicators from "@/pesayetu/components/DataIndicators";
import Page from "@/pesayetu/components/Page";
import Project from "@/pesayetu/components/Project";
import Summary from "@/pesayetu/components/Summary";
import SupportingPartners from "@/pesayetu/components/SupportingPartners";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function About({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.aboutHero} />
      <Summary {...blocks?.summary} />
      <DataIndicators {...blocks.dataIndicators} />
      <AboutTeam {...blocks?.aboutTeam} />
      <Project {...blocks?.partnersAndNewsletter} />
      <SupportingPartners {...blocks?.supportingPartners} />
    </Page>
  );
}

About.propTypes = {
  blocks: PropTypes.shape({
    aboutHero: PropTypes.shape({}),
    dataIndicators: PropTypes.shape({}),
    aboutTeam: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
    supportingPartners: PropTypes.shape({}),
    summary: PropTypes.shape({}),
  }),
};

About.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "about" },
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
