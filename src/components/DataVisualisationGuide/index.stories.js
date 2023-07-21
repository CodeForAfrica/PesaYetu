/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataVisuals from ".";

import { dataVisuals } from "@/pesayetu/config";

export default {
  title: "Sections/DataVisualisationGuide",
};

function Template({ ...args }) {
  return <DataVisuals {...args} />;
}

export const Default = Template.bind({});

Default.args = dataVisuals;
