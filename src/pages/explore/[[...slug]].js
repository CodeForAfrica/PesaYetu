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
    blocks: { tutorial },
  } = props;
  return (
    <Tutorial {...tutorial}>
      <Page {...props}>
        <ExplorePage {...props} />
      </Page>
    </Tutorial>
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

const postType = "page";

export async function getStaticPaths() {
  const { locationCodes } = await fetchProfileConfigurations();
  const paths = locationCodes.map((locationCode) => ({
    params: { slug: [locationCode] },
  }));

  return {
    paths,
    // since we'll only do redirect for new paths, blocking seem appropriate
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
  const [originalCode] = params?.slug || ["ke"];
  const code = originalCode.toLowerCase();

  if (!locationCodes.includes(code)) {
    return {
      notFound: true,
    };
  }

  // Allow for case-insensitive code orhuman-reaable location names
  // appended to code e.g. ke/kenya,  47/nairobi
  if (code !== originalCode || params?.slug?.length > 1) {
    return {
      redirect: {
        destination: `/explore/${code}`,
        permanent: true,
      },
    };
  }

  const apiUri = process.env.HURUMAP_API_URL;
  const profile = await fetchProfile(apiUri, code);

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
