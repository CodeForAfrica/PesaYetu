import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const posts = ["privacy-policy", "terms-of-service"];

export default function LegalPrivacyPolicy(props) {
  const {
    post: { title, content },
  } = props;
  return (
    <Page {...props} title={title}>
      <StoryPage content={content} title={title} />
    </Page>
  );
}

LegalPrivacyPolicy.propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.shape({}),
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

LegalPrivacyPolicy.defaultProps = {
  blocks: undefined,
  post: undefined,
  title: undefined,
};

export async function getStaticPaths() {
  const paths = posts.map((page) => ({
    params: { slug: page },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ preview, params, previewData }) {
  console.log(params);

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
  return {
    props: {
      ...props,
      blocks,
    },
    revalidate,
  };
}
