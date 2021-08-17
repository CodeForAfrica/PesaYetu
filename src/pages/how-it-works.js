import PropTypes from "prop-types";
import React from "react";

import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import PartnersAndNewsletter from "@/pesayetu/components/Partners";
import SupportingPartners from "@/pesayetu/components/SupportingPartners";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

export default function Home({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <PartnersAndNewsletter {...blocks?.partnersAndNewsletter} />
      <SupportingPartners {...blocks?.supportingPartners} />
    </Page>
  );
}

Home.propTypes = {
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    supportingPartners: PropTypes.shape({}),
    partnersAndNewsletter: PropTypes.shape({}),
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
