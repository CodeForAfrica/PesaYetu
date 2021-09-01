import React from "react";

import DatasetsAndDocuments from ".";

import { datasetTypeArgs, documentsArg } from "@/pesayetu/config";

const items = [
  { label: "DOCUMENTS & SPEECHES", children: documentsArg },
  { label: "DATASET", children: datasetTypeArgs },
];

export default {
  title: "Components/DatasetsAndDocuments",
};

const Template = ({ ...args }) => <DatasetsAndDocuments {...args} />;

export const Default = Template.bind({});

Default.args = {
  items,
};
