/* eslint-disable import/no-anonymous-default-export */
import site from "@/pesayetu/utils/site";

export default {
  titleTemplate: "%s",
  defaultTitle: "PesaYetu",
  description: "County data to hold your government accountable",
  openGraph: {
    type: "website",
    url: site.environmentUrl,
    locale: "en",
    site_name: "PesaYetu",
    images: [
      {
        url: `${site.environmentUrl}image.jpg`,
        width: 1600,
        height: 800,
        alt: "PesaYetu",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@PesaCheck",
    site: "@PesaCheck",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "minimum-scale=1, initial-scale=1, width=device-width",
    },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "preload",
      href: "/fonts/poppins-v15-latin-900.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "",
    },
  ],
};
