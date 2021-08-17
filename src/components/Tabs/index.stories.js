import React from "react";

import Tabs from ".";

const items = [
  { label: "News", children: "This is news panel" },
  { label: "Insights", children: "This is the insights panel" },
];

export default {
  title: "Components/Tabs",
};

const Template = ({ ...args }) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  items,
};
