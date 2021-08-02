/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";
/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, menus, ...props }) {
  const footerProps = {
    menu: getFooterMenu(menus?.footerMenu ?? []),
  };
  return (
    <>
      <NextSeo {...props} />
      {children}
      <Footer {...footerProps.menu} />
    </>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menus: PropTypes.shape({
    footerMenu: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

BasePage.defaultProps = {
  children: undefined,
  menus: undefined,
};

export default BasePage;
