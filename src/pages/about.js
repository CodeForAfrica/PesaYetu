import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/AboutHero";
import Page from "@/pesayetu/components/Page";
import PartnersAndNewsletter from "@/pesayetu/components/Partners";
import SupportingPartners from "@/pesayetu/components/SupportingPartners";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function About({ footerProps, blocks, ...props }) {
  return (
    <Page footerProps={footerProps} {...props}>
      <Hero {...blocks?.aboutHero} />
      <PartnersAndNewsletter {...blocks?.partnersAndNewsletter} />
      <SupportingPartners {...blocks?.supportingPartners} />
    </Page>
  );
}

About.propTypes = {
  blocks: PropTypes.shape({
    aboutHero: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
    supportingPartners: PropTypes.shape({}),
  }),
  footerProps: PropTypes.shape({}),
};

About.defaultProps = {
  blocks: undefined,
  footerProps: undefined,
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
  const footerProps = getFooterMenu(props?.menus?.footerMenu || []);
  return {
    props: {
      ...props,
      blocks,
      footerProps,
    },
    revalidate,
  };
}
