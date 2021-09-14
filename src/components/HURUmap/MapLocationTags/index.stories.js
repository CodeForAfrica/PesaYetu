import React from "react";

import MapLocationTags from ".";

import { items, tags } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/MapLocationTags",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
    tags: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <MapLocationTags {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags,
  items,
};
