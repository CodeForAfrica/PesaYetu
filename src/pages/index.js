import React from 'react';

import getPostTypeStaticProps from '@/pesayetu/functions/postTypes/getPostTypeStaticProps';

export default function Home() {
  return <div>Pesa yetu homepage template</div>;
}

export async function getStaticProps() {
  const postType = 'page';
  const { props } = await getPostTypeStaticProps({ slug: '/' }, postType);

  console.log(props);

  return {
    props,
  };
}
