import React from "react";

import Sources from ".";

import { documentsArgs } from "@/pesayetu/config";

export default {
  title: "Components/Sources",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
  },
};

function Template({ ...args }) {
  return <Sources {...args} />;
}

export const Default = Template.bind({});

Default.args = documentsArgs;
