/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataIndicators from ".";

import { dataIndicator } from "@/pesayetu/config";

export default {
  title: "Sections/DataIndicators",
};

const Template = ({ ...args }) => <DataIndicators {...args} />;

export const Default = Template.bind({});

Default.args = dataIndicator;
