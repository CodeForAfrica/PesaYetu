import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function PrivacyPolicy({
  blocks,
  title,
  pageContent,
  ...props
}) {
  return (
    <Page {...props}>
      <StoryPage title={title} {...props} content={pageContent} />
    </Page>
  );
}

PrivacyPolicy.propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.shape({}),
  pageContent: PropTypes.string,
};

PrivacyPolicy.defaultProps = {
  blocks: undefined,
  pageContent: undefined,
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
  const pageContent = props?.post?.content;

  return {
    props: {
      ...props,
      title,
      pageContent,
      blocks,
    },
    revalidate,
  };
}
