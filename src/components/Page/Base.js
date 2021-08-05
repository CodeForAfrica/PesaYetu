import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, footerProps, ...props }) {
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
  footerProps: PropTypes.shape({}),
};

BasePage.defaultProps = {
  children: undefined,
  footerProps: undefined,
};

export default BasePage;
