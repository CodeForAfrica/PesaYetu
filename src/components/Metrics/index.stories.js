import React from "react";

import Metrics from ".";

import { metrics } from "@/pesayetu/config";

export default {
  title: "Sections/Metrics",
  argTypes: {},
};

const Template = ({ ...args }) => <Metrics {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: metrics.title,
  items: metrics.items,
};
