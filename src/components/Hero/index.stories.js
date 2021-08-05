import React from "react";

import Hero from ".";

import { searchArgs } from "@/pesayetu/config";

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
    selectProps: {
      control: {
        type: "object",
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
  selectProps: searchArgs.selectProps,
  comment:
    "* Eight counties are currently available. We will soon implement additional ones.",
  center: [0.3051933453207569, 37.908818734483155],
};
