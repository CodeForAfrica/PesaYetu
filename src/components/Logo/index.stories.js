import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import Logo from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/Logo",
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <Logo {...args} />;
export const Default = Template.bind({});

Default.args = {
  ...navigationArgs.logoProps,
};
