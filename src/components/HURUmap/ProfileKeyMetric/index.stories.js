import React from "react";

import ProfileKeyMetric from "@/pesayetu/components/HURUmap/ProfileKeyMetric";

export default {
  title: "Components/HURUmap/ProfileKeyMetric",
  argTypes: {},
};

const Template = ({ ...args }) => <ProfileKeyMetric {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "Primary",
  percentage: "11",
  description: "Voter registration %",
  summary: "10.1% National Average",
};
