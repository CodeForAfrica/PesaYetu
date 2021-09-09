import React from "react";

import Tour from "@/pesayetu/components/HURUmap/Tour";

export default {
  title: "Components/HURUmap/Tour",
  argTypes: {},
};

const Template = ({ ...args }) => <Tour {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [],
};
