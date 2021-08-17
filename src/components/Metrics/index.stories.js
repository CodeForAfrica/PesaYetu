import React from "react";

import Metrics from ".";

import { metrics } from "@/pesayetu/config";

export default {
  title: "Components/Metrics",
  argTypes: {},
};

const Template = ({ ...args }) => <Metrics {...args} />;

export const Default = Template.bind({});

Default.args = {
  sectionTitle: metrics.sectionTitle,
  items: metrics.items,
};
