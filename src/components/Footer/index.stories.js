/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Footer from ".";

import { footerArgs } from "@/pesayetu/config";

export default {
  title: "Sections/Footer",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    socialMedia: {
      control: {
        type: "object",
      },
    },
    quickLinks: {
      control: {
        type: "array",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    aboutVariant: {
      control: {
        type: "select",
      },
      options: ["subtitle1", "body1"],
    },
    copyrightProps: {
      control: {
        type: "object",
      },
    },
    logoProps: {
      control: {
        type: "object",
      },
    },
  },
};

function Template({ ...args }) {
  return <Footer {...args} />;
}

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/sections-footer--default",
  },
};

Default.args = {
  ...footerArgs,
};
