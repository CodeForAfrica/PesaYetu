/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import InsightCard from "@/pesayetu/components/InsightCard";
import { insightData } from "@/pesayetu/config";

const { items } = insightData;
const [dataItem] = items;

export default {
  title: "Components/InsightCard",
  argTypes: {},
};

const Template = ({ ...args }) => <InsightCard {...args} />;

export const Default = Template.bind({});

Default.args = dataItem;
