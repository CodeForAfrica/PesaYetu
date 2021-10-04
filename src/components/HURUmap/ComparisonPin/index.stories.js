import React from "react";

import Pin from "@/pesayetu/assets/icons/pin.svg";
import ComparisonPin from "@/pesayetu/components/HURUmap/ComparisonPin";

export default {
  title: "Components/HURUmap/ComparisonPin",
  argTypes: {},
};

const Template = ({ ...args }) => <ComparisonPin {...args} />;

export const Default = Template.bind({});

Default.args = {
  helperText: "Pin and compare",
  label: "Select a location",
  icon: Pin,
};
