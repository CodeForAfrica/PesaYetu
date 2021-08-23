import React from "react";

import Documents from ".";

export default {
  title: "Sections/Documents",
  argTypes: {},
};

const Template = ({ label, ...args }) => <Documents {...args} />;

export const Default = Template.bind({});

Default.args = {};
