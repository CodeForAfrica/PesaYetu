import React from "react";

import HowItWorks from ".";

export default {
  title: "Sections/HowItWorks",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    ctaText: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <HowItWorks {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-how-it-works--default",
  },
};

Default.args = {
  title: "How it works",
  description:
    "Learn how the PesaYetu tool works and start using the provided data visualisations for free.",
  ctaText: "Find out more",
  href: "/?path=/story/components-how-it-works--default",
};
