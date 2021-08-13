import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/AboutHero";
import Page from "@/pesayetu/components/Page";
import TwoColumnLayout from "@/pesayetu/components/TwoColumnLayout";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function About({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.aboutHero} />
      <TwoColumnLayout {...blocks?.twoColumnLayout} />
    </Page>
  );
}

About.propTypes = {
  blocks: PropTypes.shape({
    aboutHero: PropTypes.shape({}),
    twoColumnLayout: PropTypes.shape({}),
  }),
};

About.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps() {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "/about" },
    postType
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
