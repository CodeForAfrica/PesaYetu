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
  level: "County",
  parent: "Kenya",
  icon: Print,
};
