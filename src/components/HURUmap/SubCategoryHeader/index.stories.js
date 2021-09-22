import React from "react";

import SubCategoryHeader from "@/pesayetu/components/HURUmap/SubCategoryHeader";

export default {
  title: "Components/HURUmap/SubCategoryHeader",
  argTypes: {},
};

const Template = (args) => <SubCategoryHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Population",
  description: "Population description",
};
