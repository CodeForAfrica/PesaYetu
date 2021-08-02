import PropTypes from "prop-types";
import React from "react";

import ExploreOtherTools from "@/pesayetu/components/ExploreOtherTools";
import Hero from "@/pesayetu/components/Hero";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ boundary, footerProps, blocks, ...props }) {
  return (
    <Page footerProps={footerProps} {...props}>
      <Hero {...blocks?.hero} boundary={boundary} />
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
  footerProps: PropTypes.shape({}),
};

Home.defaultProps = {
  boundary: undefined,
  blocks: undefined,
  footerProps: undefined,
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
  const footerProps = getFooterMenu(props?.menus?.footerMenu || []);
  return {
    props: {
      ...props,
      blocks,
      footerProps,
      boundary: children?.county,
    },
    revalidate,
  };
}
