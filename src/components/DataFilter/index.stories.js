/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataFilter from ".";

export default {
  title: "Components/DataFilter",
};

const Template = ({ ...args }) => <DataFilter {...args} />;

export const Default = Template.bind({});

Default.args = {
  datasetLabel: "Dataset",
  datatset: 65,
  orderLabel: "Order By",
  orderOptions: ["Relevance"],
  paginationOptions: [10, 25, 50],
  paginationlabel: "Show",
};
