import React from 'react';
import { CountryPageHeader } from '../components/Header';
import About from '../components/About';
import Page from '../components/Page';
// import HowItWorks from '../components/HowItWorks';
import ShowCase from '../components/Showcase';
// import Data from '../components/Data';
import useStories from '../lib/useStories';

function Home() {
  const [posts] = useStories('https://pesacheck.org/tagged/public-finance');

  return (
    <Page>
      <CountryPageHeader />
      <About />
      {/* <HowItWorks /> */}
      <ShowCase stories={posts} />
      {/* <Data /> */}
    </Page>
  );
}

export default Home;
