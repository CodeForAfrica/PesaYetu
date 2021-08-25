import React from "react";

import DatasetsAndDocuments from ".";

const items = [
  { label: "DOCUMENTS & SPEECHES", children: "DOCUMENTS & SPEECHES " },
  { label: "DATASET", children: "DATASET" },
];

export default {
  title: "Components/DatasetsAndDocuments",
};

const Template = ({ ...args }) => <DatasetsAndDocuments {...args} />;

export const Default = Template.bind({});

Default.args = {
  items,
};
