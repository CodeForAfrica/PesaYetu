import React from "react";

import MapLocationTags from ".";

const items = [
  {
    label: "YOUTH",
    number: 39.5,
  },
  {
    label: "ATTENDED SCHOOL",
    number: 20.5,
  },
  {
    label: "POPULATION BY AGE",
    number: 30.5,
  },
];

const tags = [
  {
    level: "Country",
    name: "Kenya",
  },
  {
    level: "County",
    name: "Isiolo",
  },
];

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
