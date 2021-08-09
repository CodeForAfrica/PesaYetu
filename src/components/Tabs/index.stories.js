import React from "react";

import Tabs from ".";

const tabItems = [
  { label: "News", children: "This is news section" },
  { label: "Insight", children: "This is the insight section" },
];

export default {
  title: "Components/Tabs",
  argTypes: {
    tabItems: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabItems,
};
