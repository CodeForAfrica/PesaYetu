import PropTypes from 'prop-types';
import React from 'react';

import Page from '@/pesayetu/components/Page';
import getPostTypeStaticProps from '@/pesayetu/functions/postTypes/getPostTypeStaticProps';

export default function Home({ ...props }) {
  if (props?.errorMessage) {
    return <div> {props.errorMessage}</div>;
  }
  return <Page>Pesa yetu homepage template</Page>;
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
