import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children }) {
  return (
    <>
      <Head>
        <script type="application/ld+json" />
      </Head>

      {children}
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
