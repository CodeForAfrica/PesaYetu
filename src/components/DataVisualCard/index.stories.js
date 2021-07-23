/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataVisualCard from "@/pesayetu/components/DataVisualCard";

export default {
  title: "Components/DataVisualCard",
  argTypes: {},
};

const Template = () => <DataVisualCard />;

export const Default = Template.bind({});

Default.args = {
  item: null,
};
