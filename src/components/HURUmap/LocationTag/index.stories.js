import React from "react";

import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";

export default {
  title: "Components/HURUmap/LocationTag",
  argTypes: {},
};

const Template = ({ ...args }) => <LocationTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Nairobi",
  level: "County",
};
