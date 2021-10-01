import React from "react";

import DatasetsAndDocuments from ".";

import { documentsAndDatasetsArgs } from "@/pesayetu/config";

export default {
  title: "Sections/DatasetsAndDocuments",
  argTypes: {
    activeType: {
      control: {
        type: "select",
      },
      options: ["documents", "datasets"],
    },
  },
};

const Template = (args) => <DatasetsAndDocuments {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...documentsAndDatasetsArgs,
  activeType: "documents",
};
