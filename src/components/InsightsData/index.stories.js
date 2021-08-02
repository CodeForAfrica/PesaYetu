/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import InsightsData from "@/pesayetu/components/InsightsData";
import { insightData } from "@/pesayetu/config";

export default {
  title: "Sections/InsightsData",
  argTypes: {},
};

const Template = ({ ...args }) => <InsightsData {...args} />;

export const Default = Template.bind({});

Default.args = insightData;
