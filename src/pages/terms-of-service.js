import PropTypes from "prop-types";
import React from "react";

import Page from "@/pesayetu/components/Page";
import StoryPage from "@/pesayetu/components/StoryPage";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function TermsOfService(props) {
  const {
    post: { title, content },
  } = props;
  return (
    <Page {...props} title={title}>
      <StoryPage content={content} title={title} />
    </Page>
  );
}

TermsOfService.propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.shape({}),
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

TermsOfService.defaultProps = {
  blocks: undefined,
  title: undefined,
  post: undefined,
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
