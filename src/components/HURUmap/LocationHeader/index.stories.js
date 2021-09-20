import React from "react";

import { ReactComponent as Print } from "@/pesayetu/assets/icons/print.svg";
import LocationHeader from "@/pesayetu/components/HURUmap/LocationHeader";

export default {
  title: "Components/HURUmap/LocationHeader",
  argTypes: {},
};

const Template = ({ ...args }) => <LocationHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Isiolo",
  type: "County",
  parent: "Kenya",
  printIcon: Print,
};
