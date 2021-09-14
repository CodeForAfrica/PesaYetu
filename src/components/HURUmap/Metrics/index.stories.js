import React from "react";

import Metrics from "@/pesayetu/components/HURUmap/Metrics";

export default {
  title: "Components/HURUmap/Metrics",
  argTypes: {},
};

const Template = ({ ...args }) => <Metrics {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "Primary",
  percentage: "11",
  description: "Voter registration %",
  summary: "10.1% National Average",
};
