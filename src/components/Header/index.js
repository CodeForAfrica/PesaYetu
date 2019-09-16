import React from 'react';

import Header from './Header';

import TitleHero from '../Hero/TitleHero';
import CountryHero from '../Hero/CountryHero';

export function TitlePageHeader({ children, ...props }) {
  return (
    <Header {...props}>
      <TitleHero>{children}</TitleHero>
    </Header>
  );
}

export function CountryPageHeader(props) {
  return (
    <Header {...props}>
      <CountryHero />
    </Header>
  );
}

export function ProfilePageHeader(props) {
  return (
    <Header {...props}>
      <div>
       <h1> Profile Page - awaiting postgraphile integration to database</h1>
      </div>
    </Header>
  );
}

