import React from "react";

import Datasets from ".";

import { documentsArg, datasetTypeArgs } from "@/pesayetu/config";

export default {
  title: "Sections/Datasets",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
    datasetType: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Datasets {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: documentsArg.items,
  datasetType: datasetTypeArgs.types,
};
