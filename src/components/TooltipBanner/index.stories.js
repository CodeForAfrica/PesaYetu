import React from "react";

import TooltipBanner from ".";

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

function Template({ ...args }) {
  return <TooltipBanner {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  tagline:
    "Ready to use the toolbox? Learn more by walking through our tooltip guide.",
  ctaText: "Explore the tooltip",
};
