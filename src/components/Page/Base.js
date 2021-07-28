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
        return {
          image: {
            src: url,
            alt: label.toLowerCase(),
          },
          url: title,
          description,
        };
      })[0];
    const socialLinks = data
      .filter((item) => item.label.toLowerCase() === "stay in touch")
      // eslint-disable-next-line no-shadow
      .map(({ children }) => {
        return children.map(({ label, url, title }) => {
          return {
            image: {
              src: url,
              alt: label.toLowerCase(),
            },
            url: title,
            label,
          };
        });
      })[0];
    const copyrightProps = data
      .filter((item) => item.label.toLowerCase() === "copyright")
      // eslint-disable-next-line no-shadow
      .map(({ url, description, title }) => {
        return {
          icon: url,
          copyright: description,
          copyrightUrl: title,
        };
      })[0];
    const quickLinks = data
      .filter((item) => item.label.toLowerCase() === "resources")
      // eslint-disable-next-line no-shadow
      .map(({ label, children }) => {
        return {
          title: label,
          // eslint-disable-next-line no-shadow
          links: children.map(({ label, url }) => {
            return {
              label,
              url,
            };
          }),
        };
      })[0];
    return {
      logosProps,
      socialLinks,
      copyrightProps,
      quickLinks,
    };
  };
  getFooterMenu(menus?.footerMenu ?? []);
  console.log(getFooterMenu(menus?.footerMenu ?? []));
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
