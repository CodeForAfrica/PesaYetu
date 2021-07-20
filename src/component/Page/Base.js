import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";
/**
 * Base page that can be used to build all other pages.
 */

function BasePage({ children, ...props }) {
  return (
    <>
      <NextSeo {...props} />
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
