import React from "react";

import Input from ".";

export default {
  title: "Components/Input",
};

const Template = ({ ...args }) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
