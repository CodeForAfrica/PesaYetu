/* eslint-disable no-console */
import React from "react";

import Documents from ".";

import { documentsArg } from "@/pesayetu/config";

export default {
  title: "Sections/Documents",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ label, ...args }) => <Documents {...args} />;

export const Default = Template.bind({});

Default.args = documentsArg;
