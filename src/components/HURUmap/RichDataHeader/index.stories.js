import React from "react";

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
  type: "County",
  parent: "Kenya",
  printIcon: Print,
};
