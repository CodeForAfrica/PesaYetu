import PropTypes from "prop-types";
import React from "react";

import DatasetsAndDocuments from "@/pesayetu/components/DatasetsAndDocuments";
import DataSources from "@/pesayetu/components/DataSources";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticPaths from "@/pesayetu/functions/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const postType = "page";

export default function Data({ blocks, activeLabel, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <DatasetsAndDocuments
        activeLabel={activeLabel}
        items={blocks?.documentAndDatasets}
      />
      <DataSources {...blocks?.dataSource} />
    </Page>
  );
}

Data.propTypes = {
  activeLabel: PropTypes.string,
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    dataSource: PropTypes.shape({}),
    documentAndDatasets: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Data.defaultProps = {
  activeLabel: undefined,
  blocks: undefined,
};

export async function getStaticPaths() {
  return getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  const {
    slug: [activeLabel],
  } = params;

  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "data" },
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
      activeLabel,
      blocks,
    },
    revalidate,
  };
}
