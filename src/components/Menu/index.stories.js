import React from "react";

import Menu from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/Menu",
  argTypes: {
    links: {
      control: {
        type: "array",
      },
    },
    socialLinks: {
      control: {
        type: "array",
      },
    },
  },
};

function Template({ ...args }) {
  return <Menu {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  links: navigationArgs.menuProps,
  socialLinks: navigationArgs.socialLinks,
};
