import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import Logo from ".";

import { config } from "@/pesayetu/config";

const { footerArgs } = config;

export default {
  title: "Components/Logo",
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <Logo {...args} />;
export const Default = Template.bind({});

Default.args = {
  ...footerArgs.logoProps,
};
