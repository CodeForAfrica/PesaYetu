import PropTypes from 'prop-types';
import React from 'react';

import getPostTypeStaticProps from '@/pesayetu/functions/postTypes/getPostTypeStaticProps';

export default function Home({ ...props }) {
  if (props?.errorMessage) {
    return <div> {props.errorMessage}</div>;
  }
  return <div>Pesa yetu homepage template</div>;
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
