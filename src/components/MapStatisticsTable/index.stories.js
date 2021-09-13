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

const tagItems = [
  {
    tag: "Country",
    label: "South Africa",
  },
  {
    tag: "Province",
    label: "Free State",
  },
  {
    tag: "District",
    label: "Free state westham",
  },
  {
    tag: "Municipality",
    label: "Free state westham",
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
    tagItems: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <MapStatisticsTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagItems,
  items,
};
