import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import SocialMediaIcons from ".";

import { ReactComponent as Facebook } from "@/pesayetu/assets/footer-social-fb.svg";
import { ReactComponent as Twitter } from "@/pesayetu/assets/footer-social-tw.svg";

const socialLinks = [
  {
    href: "/twitter",
    component: Twitter,
    label: "twitter",
  },
  {
    href: "/facebook",
    component: Facebook,
    label: "facebook",
  },
];

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
  socialLinks,
};
