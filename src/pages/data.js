import PropTypes from "prop-types";
import React from "react";

import DatasetsAndDocuments from "@/pesayetu/components/DatasetsAndDocuments";
import DataSources from "@/pesayetu/components/DataSources";
import Hero from "@/pesayetu/components/OtherHero";
import Page from "@/pesayetu/components/Page";
import { datasetTypeArgs, documentsArg } from "@/pesayetu/config";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const items = [
  { label: "DOCUMENTS & SPEECHES", children: documentsArg },
  { label: "DATASET", children: datasetTypeArgs },
];

export default function Data({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.otherHero} />
      <DataSources {...blocks?.dataSource} />
      <DatasetsAndDocuments items={items} />
    </Page>
  );
}

Data.propTypes = {
  blocks: PropTypes.shape({
    otherHero: PropTypes.shape({}),
    dataSource: PropTypes.shape({}),
  }),
};

Data.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
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
      blocks,
    },
    revalidate,
  };
}
