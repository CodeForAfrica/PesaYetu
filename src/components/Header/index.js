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
