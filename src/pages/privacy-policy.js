import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function PrivacyPolicy({ blocks, title, ...props }) {
  return (
    <Page {...props}>
      <StoryPage title={title} {...props} />
    </Page>
  );
}

PrivacyPolicy.propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.shape({
    aboutProject: PropTypes.shape({}),
  }),
};

PrivacyPolicy.defaultProps = {
  blocks: undefined,
  title: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "privacy-policy" },
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
  const title = props?.post?.title;

  return {
    props: {
      ...props,
      title,
      blocks,
    },
    revalidate,
  };
}
