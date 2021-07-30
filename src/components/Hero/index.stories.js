import React from "react";

import Hero from ".";

import { ReactComponent as SearchOpen } from "@/pesayetu/assets/search-open.svg";

export default {
  title: "Sections/Hero",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    tagline: {
      control: {
        type: "text",
      },
    },
    comment: {
      control: {
        type: "text",
      },
    },
    searchLabel: {
      control: {
        type: "text",
      },
    },
    boundary: {
      control: {
        type: "object",
      },
    },
    styles: {
      control: {
        type: "object",
      },
    },
    geoJSONStyles: {
      control: {
        type: "object",
      },
    },
    zoom: {
      control: {
        type: "number",
      },
    },
    center: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ ...args }) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  title:
    'Data to hold <br /> your government <span class="highlight">accountable</span>',
  tagline:
    "PesaYetu helps journalists, researchers and activists transform their work with in-depth county-specific information. Get started now with datasets from Kenya.",
  selectProps: {
    title: "Search for a location*",
    placeholder: "Abc_",
    selectId: "select-grouped-id",
    inputBaseId: "inputbase-grouped-id",
    selectLabel: "select-grouped-label",
    inputBaseLabel: "inputbase-grouped-label",
    openIcon: SearchOpen,
    closeIcon: SearchOpen,
    menuItems: [
      {
        countryName: "country 1",
        countryUrl: "/country-1",
        items: [
          {
            name: "subcounty 1",
            url: "/subcounty-1",
          },
          {
            name: "subcounty 2",
            url: "/subcounty-2",
          },
          {
            name: "subcounty 3",
            url: "/subcounty-3",
          },
        ],
      },
      {
        countryName: "country 2",
        countryUrl: "/country-2",
        items: [
          {
            name: "subcounty 4",
            url: "/subcounty-4",
          },
          {
            name: "subcounty 5",
            url: "/subcounty-5",
          },
        ],
      },
      {
        countryName: "country 3",
        countryUrl: "/country-3",
        items: [
          {
            name: "subcounty 6",
            url: "/subcounty-6",
          },
          {
            name: "subcounty 7",
            url: "/subcounty-7",
          },
        ],
      },
    ],
  },
  comment:
    "* Eight counties are currently available. We will soon implement additional ones.",
  center: [0.3051933453207569, 37.908818734483155],
};
