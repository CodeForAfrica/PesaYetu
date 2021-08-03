import React from "react";

import NewsInsight from ".";

export default {
  title: "Components/NewsInsight",
  argTypes: {},
};

const Template = ({ ...args }) => <NewsInsight {...args} />;

export const Default = Template.bind({});

Default.args = {};
