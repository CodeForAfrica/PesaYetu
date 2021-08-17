import React from "react";

import Metrics from ".";

import { metrics } from "@/pesayetu/config";

const { items } = metrics;
const [item] = items;

export default {
  title: "Components/Metrics",
  argTypes: {},
};

const Template = ({ ...args }) => <Metrics {...args} />;

export const Default = Template.bind({});

Default.args = {
  dataVisualsProps: item,
  secondDataVisualsProps: item,
};
