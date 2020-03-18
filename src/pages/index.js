import React from 'react';
import { CountryPageHeader } from 'components/Header';
import About from 'components/About';
import Page from 'components/Page';
import ShowCase from 'components/Showcase';
import useStories from 'lib/useStories';

function Home() {
  const [posts] = useStories('https://pesacheck.org/tagged/public-finance');
  return (
    <Page>
      <CountryPageHeader />
      <About />
      <ShowCase stories={posts} />
    </Page>
  );
}

export default Home;
