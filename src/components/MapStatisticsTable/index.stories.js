import React from "react";

import MapStatisticsTable from ".";

const items = [
  {
    name: "csv",
    number: 40,
  },
  {
    name: "xls",
    number: 40,
  },
  {
    name: "json",
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
