import React from "react";

import { ReactComponent as Pin } from "@/pesayetu/assets/icons/pin.svg";
import { ReactComponent as Print } from "@/pesayetu/assets/icons/print.svg";
import RichDataHeader from "@/pesayetu/components/HURUmap/RichDataHeader";

export default {
  title: "Components/HURUmap/RichDataHeader",
  argTypes: {},
};

const Template = ({ ...args }) => <RichDataHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Isiolo",
  description: "A County in Kenya",
  label: "Pin and Compare",
  printIcon: Print,
  pinIcon: Pin,
};
