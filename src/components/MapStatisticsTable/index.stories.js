import React from "react";

import MapStatisticsTable from ".";

const items = [
  {
    name: "YOUTH",
    number: 39.5,
  },
  {
    name: "ATTENDED SCHOOL",
    number: 20.5,
  },
  {
    name: "POPULATION BY AGE",
    number: 30.5,
  },
];

const tags = [
  {
    tag: "Country",
    label: "Kenya",
  },
  {
    tag: "County",
    label: "Isiolo",
  },
];

export default {
  title: "Components/MapStatisticsTable",
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

const Template = ({ ...args }) => <MapStatisticsTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags,
  items,
};
