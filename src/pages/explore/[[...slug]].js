import PropTypes from "prop-types";
import React from "react";

import ExplorePage from "@/pesayetu/components/ExplorePage";
import TourProvider from "@/pesayetu/components/HURUmap/Tutorial";
import Connector from "@/pesayetu/components/HURUmap/Tutorial/Connector";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import fetchJson from "@/pesayetu/utils/fetchJson";

export default function Explore(props) {
  const {
    blocks: { tutorial },
  } = props;
  return (
    <TourProvider {...tutorial}>
      <Connector />
      <Page {...props}>
        <ExplorePage {...props} />
      </Page>
    </TourProvider>
  );
}
Explore.propTypes = {
  blocks: PropTypes.shape({
    tutorial: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

Explore.defaultProps = {
  blocks: undefined,
};

export async function getStaticPaths() {
  const result = await fetchJson(
    `${process.env.HURUMAP_API_URL}all_details/profile/1/geography/KE/?format=json`
  );
  const paths = result?.children?.county?.features?.map(
    ({ properties: { code, level } }) => {
      const s = `${level}-${code}`;
      return {
        params: {
          slug: [s],
        },
      };
    }
  );

  return {
    paths: [{ params: { slug: [] } }, ...paths],
    fallback: false,
  };
}

export async function getStaticProps({ preview, previewData, params }) {
  const [slug] = params?.slug ?? [];
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "explore" },
    postType,
    preview,
    previewData
  );

  const blocks = formatBlocksForSections(props?.post?.blocks);
  const featuredCounties = blocks?.featuredCounties?.counties?.split(",") || [];

  const geoCode = slug ? slug.split("-")[1] : "KE";
  if (notFound || !featuredCounties.includes(geoCode)) {
    return {
      notFound: true,
    };
  }

  const apiUri = process.env.HURUMAP_API_URL;
  const res = await fetchJson(
    `${apiUri}all_details/profile/1/geography/${geoCode}/?format=json`
  );

  const geography = res?.profile.geography;
  const geometries = {
    boundary: res?.boundary,
    children: res?.children, // Dictionary keyed by child type
    parents: res?.parent_layers ?? [], // Array of parent geographies
    themes: res?.themes ?? [],
  };

  return {
    props: {
      ...props,
      variant: "explore",
      geography,
      geometries,
      featuredCounties,
      apiUri,
      blocks,
    },
    revalidate,
  };
}
