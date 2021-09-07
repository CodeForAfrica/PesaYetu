import PropTypes from "prop-types";
import React from "react";

import DatasetsAndDocuments from "@/pesayetu/components/DatasetsAndDocuments";
import DataSources from "@/pesayetu/components/DataSources";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const types = ["documents", "datasets"];

export default function Data({ blocks, activeType, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <DatasetsAndDocuments
        activeType={activeType}
        items={blocks?.documentAndDatasets}
      />
      <DataSources {...blocks?.dataSource} />
    </Page>
  );
}

Data.propTypes = {
  activeType: PropTypes.oneOf(types),
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    dataSource: PropTypes.shape({}),
    documentAndDatasets: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Data.defaultProps = {
  activeType: undefined,
  blocks: undefined,
};

export async function getStaticPaths() {
  const paths = types.map((type) => ({ params: { slug: [type] } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, previewData }) {
  const {
    slug: [activeType],
  } = params;
  if (!types.includes(activeType)) {
    return { notFound: true };
  }

  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "data" },
    postType,
    preview,
    previewData
  );
  if (notFound) {
    return { notFound };
  }

  const blocks = formatBlocksForSections(props?.post?.blocks);
  return {
    props: {
      ...props,
      activeType,
      blocks,
    },
    revalidate,
  };
}
