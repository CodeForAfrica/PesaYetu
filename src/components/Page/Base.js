/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import { footerArgs } from "@/pesayetu/config";
/**
 * Base page that can be used to build all other pages.
 */

const getFooterMenu = (data) => {
  const logosProps = data
    .filter((item) => item.label.toLowerCase() === "logo")
    .map(({ label, url, title, description }) => {
      return {
        image: {
          src: url,
          alt: label.toLowerCase(),
        },
        url: title,
        description,
      };
    })[0];
  const socialMedia = data
    .filter((item) => item.label.toLowerCase() === "stay in touch with us")
    .map(({ label, children }) => {
      const links = children.map(({ label, url, title }) => {
        return {
          image: {
            src: url,
            alt: label.toLowerCase(),
          },
          url: title,
          label,
        };
      });
      return {
        label,
        links,
      };
    })[0];
  const copyrightProps = data
    .filter((item) => item.label.toLowerCase() === "copyright")
    .map(({ url, description, title }) => {
      return {
        icon: url,
        copyright: description,
        copyrightUrl: title,
      };
    })[0];
  const quickLinks = data
    .filter((item) => item.label.toLowerCase() === "resources")
    .map(({ label, children }) => {
      return {
        title: label,
        links: children.map(({ label, url }) => {
          return {
            label,
            href: url,
          };
        }),
      };
    })[0];
  return {
    title: socialMedia.label,
    description: logosProps.description,
    logosProps,
    socialMedia,
    quickLinks,
    copyrightProps,
  };
};
function BasePage({ children, menus, ...props }) {
  const footerProps = {
    ...footerArgs,
    cmsFooterArgs: getFooterMenu(menus?.footerMenu ?? []),
  };
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
  menus: PropTypes.shape({
    footerMenu: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

BasePage.defaultProps = {
  children: undefined,
  menus: undefined,
};

export default BasePage;
