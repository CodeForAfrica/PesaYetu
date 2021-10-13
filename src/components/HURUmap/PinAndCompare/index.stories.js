import React from "react";

import PinAndCompare from ".";

export default {
  title: "Components/HURUmap/PinAndCompare",
  argTypes: {},
};

const Template = ({ ...args }) => <PinAndCompare {...args} />;

export const Default = Template.bind({});

Default.args = {
  helperText: "Pin and compare",
  placeholder: "Select a location",
  options: ["Municipality", "Municipality One", "Municipality Two"],
};
