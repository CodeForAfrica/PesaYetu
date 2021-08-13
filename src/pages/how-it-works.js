import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import TwoColumnLayout from "@/pesayetu/components/TwoColumnLayout";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <TwoColumnLayout {...blocks?.twoColumnLayout} />
    </Page>
  );
}

Home.propTypes = {
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    twoColumnLayout: PropTypes.shape({}),
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
