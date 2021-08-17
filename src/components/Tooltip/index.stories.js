import React from "react";

import Banner from "@/pesayetu/components/Tooltip";

export default {
  title: "Components/TooltipBanner",
  argTypes: {
    tagline: {
      control: {
        type: "string",
      },
    },
    ctaText: {
      control: {
        type: "string",
      },
    },
  },
};

const Template = ({ ...args }) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagline:
    "Ready to use the toolbox? Learn more by walking through our tooltip guide.",
  ctaText: "Explore the tooltip",
};
