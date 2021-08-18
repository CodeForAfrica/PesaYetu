import PropTypes from "prop-types";
import React from "react";

import Metrics from "@/pesayetu/components/Metrics";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import { metrics } from "@/pesayetu/config";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ blocks, ...props }) {
  // eslint-disable-next-line no-console
  console.log(blocks);
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <Metrics sectionTitle={metrics.sectionTitle} items={metrics.items} />
    </Page>
  );
}

Home.propTypes = {
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
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
