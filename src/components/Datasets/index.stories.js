import React from "react";

import Datasets from ".";

import { datasetTypeArgs } from "@/pesayetu/config";

export default {
  title: "Components/Datasets",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Datasets {...args} />;

export const Default = Template.bind({});

Default.args = datasetTypeArgs;
