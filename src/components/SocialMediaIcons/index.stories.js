import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import SocialMediaIcons from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/SocialMediaIcons",
  decorators: [withNextRouter],
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
