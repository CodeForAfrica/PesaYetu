/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from './Header';
import CountryHero from '../Hero/CountryHero';
import ProfileHero from '../Hero/ProfileHero';

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
      <ProfileHero {...props} />
    </Header>
  );
}
