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

export default {
  title: "Components/MapStatisticsTable",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <MapStatisticsTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagProps: {
    tag: "Country",
    label: "South Africa",
  },
  items,
};
