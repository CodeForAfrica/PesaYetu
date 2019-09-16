import React from 'react';
import { CountryPageHeader } from '../components/Header';
import About from '../components/About';
import Page from '../components/Page';
import HowItWorks from '../components/HowItWorks';
import ShowCase from '../components/Showcase';
import config from '../config';


function Home() {
  return (
    <Page>
      <CountryPageHeader />
      <About about={config.about}/>
      <HowItWorks />
      <ShowCase stories={config.showCaseStories}/>
    </Page>
  );
}

export default Home;
