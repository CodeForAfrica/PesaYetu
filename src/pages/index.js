import PropTypes from 'prop-types';
import React from 'react';

import ExploreSection from '@/pesayetu/component/ExploreSection';
import Page from '@/pesayetu/component/Page';
import { exploreTools } from '@/pesayetu/config';
import getPostTypeStaticProps from '@/pesayetu/functions/postTypes/getPostTypeStaticProps';

export default function Home({ ...props }) {
  if (props?.errorMessage) {
    return <div> {props.errorMessage}</div>;
  }
  return (
    <Page>
      <ExploreSection {...exploreTools} />
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
  const postType = 'page';
  return getPostTypeStaticProps({ slug: '/' }, postType);
}
