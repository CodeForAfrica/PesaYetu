import React from "react";

import SocialMediaIcons from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/SocialMediaIcons",
  argTypes: {
    socialLinks: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <SocialMediaIcons {...args} />;

export const Default = Template.bind({});

Default.args = {
  socialLinks: navigationArgs.socialLinks,
};
