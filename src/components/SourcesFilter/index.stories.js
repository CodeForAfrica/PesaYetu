/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import SourcesFilter from ".";

export default {
  title: "Components/SourcesFilter",
};

const Template = ({ ...args }) => <SourcesFilter {...args} />;

export const Default = Template.bind({});

Default.args = {
  countLabel: "Dataset",
  count: 65,
  orderLabel: "Order By",
  orderOptions: ["Relevance"],
  paginationOptions: [10, 25, 50],
  paginationLabel: "Show",
};
