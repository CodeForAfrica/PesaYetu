import React from "react";

import ExploreButton from ".";

export default {
  title: "Components/HURUmap/ExploreButton",
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: "Overview",
      href: "1",
      icon: "",
    },
  ],
};
