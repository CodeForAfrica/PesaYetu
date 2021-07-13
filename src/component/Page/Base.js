import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '@/pesayetu/component/Footer';
import { footerArgs } from '@/pesayetu/config';
/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, ...props }) {
  const footerProps = {
    ...footerArgs,
  };
  // eslint-disable-next-line no-console
  console.log('footerProps', footerProps);
  return (
    <>
      <NextSeo {...props} />
      {children}
      <Footer {...footerProps} />
    </>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BasePage.defaultProps = {
  children: undefined,
};

export default BasePage;
