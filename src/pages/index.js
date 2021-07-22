import PropTypes from "prop-types";
import React from "react";

import ExploreOtherTools from "@/pesayetu/components/ExploreOtherTools";
import InsightsData from "@/pesayetu/components/InsightsData";
import Page from "@/pesayetu/components/Page";
import { exploreTools, insightData } from "@/pesayetu/config";
import getPostTypeStaticProps from "@/pesayetu/functions/postTypes/getPostTypeStaticProps";

console.log("DATAT", insightData);

export default function Home({ ...props }) {
  if (props?.errorMessage) {
    return <div> {props.errorMessage}</div>;
  }
  return (
    <Page>
      <ExploreOtherTools {...exploreTools} />
      <InsightsData {...insightData} />
    </Page>
  );
}

Home.propTypes = {
  errorMessage: PropTypes.string,
};

Home.defaultProps = {
  errorMessage: undefined,
};

export async function getStaticProps() {
  const postType = "page";
  return getPostTypeStaticProps({ slug: "/" }, postType);
}
