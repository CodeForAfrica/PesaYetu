import React from "react";

import SubcategoryHeader from "@/pesayetu/components/HURUmap/SubCategoryHeader";

export default {
  title: "Components/HURUmap/SubcategoryHeader",
  argTypes: {},
};

const Template = (args) => <SubcategoryHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Population",
  description: "Population description",
};
