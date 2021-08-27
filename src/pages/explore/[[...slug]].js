import dynamic from "next/dynamic";
import React from "react";

import Page from "@/pesayetu/components/Page";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

const Map = dynamic(() => import("@/pesayetu/components/Map"), { ssr: false });

export default function Explore(props) {
  return (
    <Page {...props}>
      <Map
        center={[0.3051933453207569, 37.908818734483155]}
        zoom={6.75}
        tileLayer={{
          url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
        }}
        {...props}
      />
    </Page>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.WAZIMAP_API_URL}all_details/profile/3/geography/KE/?format=json`
  );
  const result = await res.json();
  const paths = result?.children?.county?.features?.map(
    ({ properties: { code } }) => {
      return {
        params: {
          slug: [code],
        },
      };
    }
  );

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ preview, previewData }) {
  const postType = "page";
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: "explore" },
    postType,
    preview,
    previewData
  );

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
    },
    revalidate,
  };
}
