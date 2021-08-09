import React from "react";

import Logo from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/Logo",
  argTypes: {},
};

const Template = ({ ...args }) => <Logo {...args} />;
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-logo--default",
  },
};

Default.args = {
  ...navigationArgs.logoProps,
};
