/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import InsightsData from "@/pesayetu/components/InsightsData";

export default {
  title: "Sections/InsightsData",
  argTypes: {},
};

const Template = () => <InsightsData />;

export const Default = Template.bind({});

Default.args = {
  item: null,
};
