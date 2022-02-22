import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import ExplorePage from "@/pesayetu/components/ExplorePage";
import Tutorial from "@/pesayetu/components/HURUmap/Tutorial";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import { fetchProfile, fetchProfileGeography } from "@/pesayetu/lib/hurumap";

export default function Explore(props) {
  const {
    blocks: { tutorial, panel },
  } = props;
  const {
    query: { showTutorial },
  } = useRouter();

  return (
    <Tutorial
      key={showTutorial}
      {...tutorial}
      defaultOpen={Number.parseInt(showTutorial, 10) === 1}
    >
      <Page {...props}>
        <ExplorePage panelProps={panel} {...props} />
      </Page>
    </Tutorial>
  );
}

Explore.propTypes = {
  blocks: PropTypes.shape({
    panel: PropTypes.shape({}),
    tutorial: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

Explore.defaultProps = {
  blocks: undefined,
};

const postType = "page";

export async function getStaticPaths() {
  const { locationCodes } = await fetchProfile();
  const paths = locationCodes.map((locationCode) => ({
    params: { slug: [locationCode] },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ preview, previewData, params }) {
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

  const blocks = await formatBlocksForSections(props?.post?.blocks);
  const { locationCodes, preferredChildren } = await fetchProfile();
  const [originalCode] = params?.slug || [""];
  const code = originalCode.trim().toLowerCase();

  // /explore -> /explore/ke
  if (!code) {
    return {
      redirect: {
        destination: `/explore/ke`,
        permanent: true,
      },
    };
  }

  // Allow for case-insensitive code or human-readable location names
  // appended to code e.g.:
  // KE => ke, 47/nairobi => 47, 47-vs-11/nairobi-vs-isiolo => 47-vs-11
  if (code !== originalCode || params?.slug?.length > 1) {
    return {
      redirect: {
        destination: `/explore/${code}`,
        permanent: true,
      },
    };
  }

  const geoCodes = code
    .split("-vs-")
    .map((c) => c.trim())
    .filter((c) => c);
  if (!geoCodes.every((gC) => locationCodes.includes(gC))) {
    return {
      notFound: true,
    };
  }

  const [primaryCode, secondaryCode] = geoCodes;
  const primaryProfile = await fetchProfileGeography(primaryCode);
  const profile = [primaryProfile];
  if (secondaryCode) {
    const secondaryProfile = await fetchProfileGeography(secondaryCode);
    profile.push(secondaryProfile);
  }

  return {
    props: {
      ...props,
      blocks,
      locationCodes,
      profile,
      variant: "explore",
      preferredChildren,
    },
    revalidate,
  };
}
