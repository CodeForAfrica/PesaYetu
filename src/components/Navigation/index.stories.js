import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import Navigation from ".";

import { config } from "@/pesayetu/config";

export default {
  title: "Sections/Navigation",
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <Navigation {...args} />;
const { footerArgs } = config;
export const Default = Template.bind({});

Default.args = {
  ...footerArgs,
};
