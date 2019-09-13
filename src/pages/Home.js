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
      <About 
        heading="About Us" 
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." 
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
      />
      <HowItWorks />
      <ShowCase />
    </Page>
  );
}

export default Home;
