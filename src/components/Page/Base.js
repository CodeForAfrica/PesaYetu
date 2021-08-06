import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import Navigation from "@/pesayetu/components/Navigation";
import { navigationArgs } from "@/pesayetu/config";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, menus, ...props }) {
  const footerProps = getFooterMenu(menus?.footerMenu || []);

  return (
    <>
      <Navigation {...navigationArgs} />
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
  menus: PropTypes.shape({
    footerMenu: PropTypes.arrayOf({}),
  }),
};

BasePage.defaultProps = {
  children: undefined,
  menus: undefined,
};

export default BasePage;
