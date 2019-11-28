import React, { useEffect, useState } from 'react';
import { CountryPageHeader } from '../components/Header';
import About from '../components/About';
import Page from '../components/Page';
import HowItWorks from '../components/HowItWorks';
import ShowCase from '../components/Showcase';
import Data from '../components/Data';
import config from '../config';
import createAPI from '../lib/api';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const api = createAPI();
    api.getLatestMedium().then(setPosts);
  }, []);
  return (
    <Page>
      <CountryPageHeader />
      <About about={config.about} />
      <HowItWorks />
      <ShowCase stories={posts} />
      <Data />
    </Page>
  );
}

export default Home;
