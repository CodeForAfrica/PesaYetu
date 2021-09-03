/* eslint-disable no-console */
import React from "react";

import Sources from ".";

import { documentsArg } from "@/pesayetu/config";

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

const Template = ({ ...args }) => <Sources {...args} />;

export const Default = Template.bind({});

Default.args = documentsArg;
