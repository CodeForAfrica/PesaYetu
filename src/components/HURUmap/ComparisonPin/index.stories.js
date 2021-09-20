import React from "react";

import { ReactComponent as Pin } from "@/pesayetu/assets/icons/pin.svg";
import ComparisonPin from "@/pesayetu/components/HURUmap/ComparisonPin";

export default {
  title: "Components/HURUmap/ComparisonPin",
  argTypes: {},
};

const Template = ({ ...args }) => <ComparisonPin {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Pin and compare",
  pinIcon: Pin,
};
