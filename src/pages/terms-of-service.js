import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function TermsOfService({ blocks, ...props }) {
  return <Page {...props} />;
}

TermsOfService.propTypes = {
  blocks: PropTypes.shape({
    aboutProject: PropTypes.shape({}),
    metrics: PropTypes.shape({}),
    otherHero: PropTypes.shape({}),
    ourCourses: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
    startLearning: PropTypes.shape({}),
    summary: PropTypes.shape({}),
    supportingPartners: PropTypes.shape({}),
    tooltipBanner: PropTypes.shape({}),
  }),
};

TermsOfService.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "terms-of-service" },
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

  return {
    props: {
      ...props,
      blocks,
    },
    revalidate,
  };
}
