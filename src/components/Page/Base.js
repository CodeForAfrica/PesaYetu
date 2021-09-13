import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import Navigation from "@/pesayetu/components/Navigation";
import { navigationArgs, tour } from "@/pesayetu/config";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";
import getNavigationMenu from "@/pesayetu/functions/menus/getNavigationMenu";

const Tour = dynamic(() => import("@/pesayetu/components/HURUmap/Tour"), {
  ssr: false,
});
/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, menus, variant, ...props }) {
  const footerProps = getFooterMenu(menus?.footerMenu || []);
  const navigation = getNavigationMenu(menus?.primaryMenu || []);
  const { menuProps } = navigation;
  const { logoProps, socialLinks } = navigationArgs;
  const navigationProps = {
    ...props,
    ...menus,
    logoProps,
    menuProps,
    socialLinks,
  };

  return (
    <>
      <Tour {...tour} />
      <Navigation {...navigationProps} variant={variant} />
      <NextSeo {...props} />
      {children}
      {variant !== "explore" && <Footer {...footerProps} />}
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
    primaryMenu: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  variant: PropTypes.string,
};

BasePage.defaultProps = {
  children: undefined,
  menus: undefined,
  variant: undefined,
};

export default BasePage;
