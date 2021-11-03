import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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
function BasePage({ children, menus, variant, post: { seo }, ...props }) {
  const footerProps = getFooterMenu(menus?.footerMenu || []);
  const navigation = getNavigationMenu(menus?.primaryMenu || []);
  const { menuProps } = navigation;
  const { socialLinks, desktopLogoProps, mobileLogoProps, drawerLogoProps } =
    navigationArgs;
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

  return (
    <>
      <Navigation {...navigationProps} variant={variant} />
      <NextSeo
        title={seo?.title}
        description={seo?.metaDesc}
        openGraph={{
          title: seo?.title,
          description: seo?.metaDesc,
          images: [{ url: seo?.opengraphImage?.sourceUrl }],
          url: seo?.canonical,
          type: seo?.opengraphType,
        }}
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
