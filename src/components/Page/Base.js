import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Navigation from "@/pesayetu/components/Navigation";
import { config } from "@/pesayetu/config";

/**
 * Base page that can be used to build all other pages.
 */

function BasePage({ children, ...props }) {
  const { footerArgs } = config;
  return (
    <>
      <NextSeo {...props} />
      {children}
      <Navigation {...footerArgs} />
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
