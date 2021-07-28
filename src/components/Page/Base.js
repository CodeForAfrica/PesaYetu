/* eslint-disable no-console */
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/pesayetu/components/Footer";
import { footerArgs } from "@/pesayetu/config";
/**
 * Base page that can be used to build all other pages.
 */

function BasePage({ children, menus, ...props }) {
  const footerProps = {
    ...footerArgs,
    links: menus?.footerMenu ?? [],
  };
  const getFooterMenu = (data) => {
    const logosProps = data
      .filter((item) => item.label.toLowerCase() === "logo")
      .map(({ label, url, title, description }) => {
        const CFA = {
          image: {
            src: url,
            alt: label.toLowerCase(),
          },
          url: title,
          description,
        };
        return {
          logoProps: CFA,
        };
      });
    const socialLinks = data
      .filter((item) => item.label.toLowerCase() === "stay in touch")
      // eslint-disable-next-line no-shadow
      .map(({ children }) => {
        const socialLinksProps = children.map(({ label, url, title }) => {
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
          socialLinksProps,
        };
      });
    const copyrightProps = data
      .filter((item) => item.label.toLowerCase() === "copyright")
      // eslint-disable-next-line no-shadow
      .map(({ url, description, title }) => {
        const copyright = {
          icon: url,
          copyright: description,
          copyrightUrl: title,
        };
        return {
          copyrightProps: copyright,
        };
      });
    const quickLinks = data
      .filter((item) => item.label.toLowerCase() === "resources")
      // eslint-disable-next-line no-shadow
      .map(({ label, children }) => {
        const quickLinksProps = {
          title: label,
          // eslint-disable-next-line no-shadow
          links: children.map(({ label, url }) => {
            return {
              label,
              url,
            };
          }),
        };
        return {
          quickLinksProps,
        };
      });
    return { logosProps, socialLinks, copyrightProps, quickLinks };
  };
  getFooterMenu(menus?.footerMenu ?? []);
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
