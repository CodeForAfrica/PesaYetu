/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import CountryHero from '../Hero/CountryHero';
import ProfileHero from '../Hero/ProfileHero';
import TitleHero from '../Hero/TitleHero';

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

export function TitlePageHeader({ children, ...props }) {
  return (
    <Header {...props}>
      <TitleHero>{children}</TitleHero>
    </Header>
  );
}

TitlePageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
