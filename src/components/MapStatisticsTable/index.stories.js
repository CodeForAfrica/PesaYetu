import React from "react";

import MapStatisticsTable from ".";

export default {
  title: "Components/MapStatisticsTable",
  argTypes: {},
};

const Template = ({ ...args }) => <MapStatisticsTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabProps: {
    tag: "Country",
    label: "South Africa",
  },
};
