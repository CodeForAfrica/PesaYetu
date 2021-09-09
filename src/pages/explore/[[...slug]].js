import React from "react";

import ExplorePage from "@/pesayetu/components/ExplorePage";
import Page from "@/pesayetu/components/Page";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import fetcher from "@/pesayetu/utils/fetcher";

export default function Explore(props) {
  return (
    <Page {...props}>
      <ExplorePage {...props} />
    </Page>
  );
}

export async function getStaticPaths() {
  const result = await fetcher(
    `https://ng.hurumap.org/api/v1/all_details/profile/1/geography/KE/?format=json`
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
    paths,
    fallback: "blocking",
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

  const geoCode = slug ? slug.split("-")[1] : "KE";

  const res = await fetcher(
    `https://ng.hurumap.org/api/v1/all_details/profile/1/geography/${geoCode}/?format=json`
  );

  const geography = res?.profile.geography;
  const geometries = {
    boundary: res?.boundary,
    children: res?.children, // Dictionary keyed by child type
    parents: res?.parent_layers ?? [], // Array of parent geographies
    themes: res?.themes ?? [],
  };
  if (notFound) {
    return {
      notFound,
    };
  }

  return {
    props: {
      ...props,
      variant: "explore",
      geography,
      geometries,
    },
    revalidate,
  };
}
