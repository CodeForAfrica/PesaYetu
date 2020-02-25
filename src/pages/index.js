import React from 'react';
import { CountryPageHeader } from 'components/Header';
import About from 'components/About';
import Page from 'components/Page';
import ShowCase from 'components/Showcase';
import { getLatestMedium } from 'lib/api';

function Home({ showcaseStories }) {
  return (
    <Page>
      <CountryPageHeader />
      <About />
      <ShowCase stories={showcaseStories} />
    </Page>
  );
}

Home.getInitialProps = async () => {
  const showcaseStories = await getLatestMedium();
  return { showcaseStories };
};

export default Home;
