import React from "react";

import LocationHighlight from ".";

export default {
  title: "Components/HURUmap/LocationHighlight",
};

const Template = (args) => <LocationHighlight {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Population",
  value: 1110000,
  formattedValue: "1,110,000",
};
