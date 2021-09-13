import React from "react";

import MapStatisticsTable from ".";

const items = [
  {
    name: "YOUTH",
    number: 40,
  },
  {
    name: "ATTENDED SCHOOL",
    number: 40,
  },
  {
    name: "POPULATION BY AGE",
    number: 40,
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
