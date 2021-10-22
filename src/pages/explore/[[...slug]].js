import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import ExplorePage from "@/pesayetu/components/ExplorePage";
import Tutorial from "@/pesayetu/components/HURUmap/Tutorial";
import Page from "@/pesayetu/components/Page";
import formatBlocksForSections from "@/pesayetu/functions/formatBlocksForSections";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";
import fetchProfile from "@/pesayetu/utils/fetchProfile";
import fetchProfileConfigurations from "@/pesayetu/utils/fetchProfileConfigurations";

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
  const { locationCodes } = await fetchProfileConfigurations();
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

  const blocks = formatBlocksForSections(props?.post?.blocks);
  const { locationCodes, preferredChildren } =
    await fetchProfileConfigurations();
  const [originalCode] = params?.slug || [""];
  const code = originalCode.toLowerCase();
  const [primaryCode, secondaryCode] = originalCode
    .split("-vs-")
    .map((c) => c.trim().toLowerCase())
    .filter((c) => c);

  if (
    !(
      locationCodes.includes(primaryCode) &&
      (!secondaryCode || locationCodes.includes(secondaryCode))
    )
  ) {
    return {
      notFound: true,
    };
  }

  // Allow for case-insensitive code or human-readable location names
  // appended to code e.g. ke/kenya, 47/nairobi, 47-vs-11/nairobi-vs-isiolo
  if (code !== originalCode || params?.slug?.length > 1) {
    return {
      redirect: {
        destination: `/explore/${code}`,
        permanent: true,
      },
    };
  }

  const apiUri = process.env.HURUMAP_API_URL;
  const primaryProfile = await fetchProfile(apiUri, primaryCode);
  const profile = [primaryProfile];
  if (secondaryCode) {
    const secondaryProfile = await fetchProfile(apiUri, secondaryCode);
    profile.push(secondaryProfile);
  }

  return {
    props: {
      ...props,
      apiUri,
      blocks,
      locationCodes,
      profile,
      variant: "explore",
      preferredChildren,
    },
    revalidate,
  };
}
