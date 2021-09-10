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
    `${process.env.HURUMAP_API_URL}all_details/profile/1/geography/KE/?format=json`
  );
  const featuredCountiesCode =
    process.env.NEXT_PUBLIC_FEATURED_COUNTIES.split(",");
  const paths = result?.children?.county?.features
    ?.filter(({ properties: { code } }) => featuredCountiesCode?.includes(code))
    ?.map(({ properties: { code, level } }) => {
      const s = `${level}-${code}`;
      return {
        params: {
          slug: [s],
        },
      };
    });

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

  const geoCode = slug ? slug.split("-")[1] : "KE";
  const apiUri = process.env.HURUMAP_API_URL;

  const res = await fetcher(
    `${apiUri}all_details/profile/1/geography/${geoCode}/?format=json`
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
      apiUri,
    },
    revalidate,
  };
}
