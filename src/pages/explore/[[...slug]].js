import dynamic from "next/dynamic";
import React from "react";

import Page from "@/pesayetu/components/Page";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const Map = dynamic(() => import("@/pesayetu/components/Map"), { ssr: false });

export default function Explore(props) {
  return (
    <Page {...props}>
      <Map
        center={[-28.995409163308832, 25.093833387362697]}
        zoom={5.75}
        {...props}
      />
    </Page>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://staging.wazimap-ng.openup.org.za/api/v1/all_details/profile/8/geography/ZA/?format=json`
  );
  const result = await res.json();
  const paths = result?.children?.province?.features?.map(
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

  const geoCode = slug ? slug.split("-")[1] : "ZA";

  const res = await fetch(
    `https://staging.wazimap-ng.openup.org.za/api/v1/all_details/profile/8/geography/${geoCode}/?format=json`
  );

  const r = await res.json();

  const geography = r?.profile.geography;
  const geometries = {
    boundary: r?.boundary,
    children: r?.children, // Dictionary keyed by child type
    parents: r?.parent_layers ?? [], // Array of parent geographies
    themes: r?.themes ?? [],
  };
  if (notFound) {
    return {
      notFound,
    };
  }

  return {
    props: {
      ...props,
      isExplore: true,
      boundary: props?.menus?.boundary,
      geography,
      geometries,
    },
    revalidate,
  };
}
