import PropTypes from "prop-types";
import React from "react";

import ExploreOtherTools from "@/pesayetu/components/ExploreOtherTools";
import Hero from "@/pesayetu/components/Hero";
import Page from "@/pesayetu/components/Page";
import { searchArgs } from "@/pesayetu/config";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ boundary, blocks, ...props }) {
  const heroProps = {
    ...blocks?.hero,
    selectProps: searchArgs?.selectProps,
  };
  return (
    <Page {...props}>
      <Hero {...heroProps} boundary={boundary} />
      <ExploreOtherTools {...blocks?.exploreOtherTools} />
    </Page>
  );
}

Home.propTypes = {
  boundary: PropTypes.shape({}),
  blocks: PropTypes.shape({
    hero: PropTypes.shape({}),
    exploreOtherTools: PropTypes.shape({}),
  }),
};

Home.defaultProps = {
  boundary: undefined,
  blocks: undefined,
};

export async function getStaticProps() {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "/" },
    postType
  );

  if (notFound) {
    return {
      notFound,
    };
  }

  const res = await fetch(
    `${process.env.WAZIMAP_API_URL}all_details/profile/3/geography/KE/?format=json`
  );
  const { children } = await res.json();

  const blocks = formatBlocksForSections(props?.post?.blocks);
  return {
    props: {
      ...props,
      blocks,
      boundary: children?.county,
    },
    revalidate,
  };
}
