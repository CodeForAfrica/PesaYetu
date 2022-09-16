import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import Navigation from "@/pesayetu/components/Navigation";
import { navigationArgs } from "@/pesayetu/config";
import { seoPropTypes } from "@/pesayetu/functions/getPagePropTypes";
import getFooterMenu from "@/pesayetu/functions/menus/getFooterMenu";
import getNavigationMenu from "@/pesayetu/functions/menus/getNavigationMenu";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, menus, variant, post: { seo } = {}, ...props }) {
  const footerProps = getFooterMenu(menus?.footerMenu || []);
  const navigation = getNavigationMenu(menus?.primaryMenu || []);
  const { menuProps, socialLinks } = navigation;
  const { desktopLogoProps, mobileLogoProps, drawerLogoProps } = navigationArgs;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const navigationProps = {
    ...props,
    ...menus,
    menuProps,
    socialLinks,
    desktopLogoProps,
    mobileLogoProps,
    drawerLogoProps,
  };

  const pageSeo = {};
  pageSeo.title = seo?.title || undefined;
  pageSeo.description = seo?.metaDesc || undefined;
  pageSeo.canonical = seo?.canonical || undefined;
  if (seo?.opengraphType || seo?.opengraphImage) {
    pageSeo.openGraph = {};
    if (seo.opengraphImage) {
      pageSeo.openGraph.images = [
        {
          url: seo.opengraphImage,
          alt: seo.title || undefined,
        },
      ];
    }
    if (seo.opengraphType) {
      pageSeo.openGraph.type = seo.opengraphType;
    }
  }

  return (
    <>
      <Navigation {...navigationProps} variant={variant} />
      <NextSeo
        {...pageSeo}
        nofollow={seo?.metaRobotsNofollow !== "follow"}
        noindex={seo?.metaRobotsNoindex !== "index"}
      />
      {children}
      {!(variant === "explore" && isDesktop) && <Footer {...footerProps} />}
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
  ...seoPropTypes,
};

BasePage.defaultProps = {
  children: undefined,
  menus: undefined,
  variant: undefined,
};

export default BasePage;
