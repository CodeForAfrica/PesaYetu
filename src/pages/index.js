import PropTypes from 'prop-types';
import React from 'react';

import Hero from '@/pesayetu/components/Hero';
import Page from '@/pesayetu/components/Page';
import formatBlocksForSections from '@/pesayetu/functions/formatBlocksForSections';
import getPostTypeStaticProps from '@/pesayetu/functions/postTypes/getPostTypeStaticProps';

export default function Home({ blocks, ...props }) {
  return (
    <Page {...props}>
      <Hero {...blocks?.hero} />
    </Page>
  );
}

Home.propTypes = {
  blocks: PropTypes.shape({
    hero: PropTypes.shape({}),
  }),
};

Home.defaultProps = {
  blocks: undefined,
};

export async function getStaticProps() {
  const postType = 'page';
  const { props, revalidate, notFound } = await getPostTypeStaticProps(
    { slug: '/' },
    postType
  );

  if (notFound) {
    return {
      notFound,
    };
  }

  const blocks = formatBlocksForSections(props?.post?.blocks);
  return {
    props: {
      ...props,
      blocks,
    },
    revalidate,
  };
}
