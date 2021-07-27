import React from "react";

import Navigation from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Sections/Navigation",
  argTypes: {},
};

const Template = ({ ...args }) => <Navigation {...args} />;
export const Default = Template.bind({});

Default.args = {
  ...navigationArgs,
};
