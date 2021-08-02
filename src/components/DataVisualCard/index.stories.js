/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataVisualCard from "@/pesayetu/components/DataVisualCard";
import { dataVisuals } from "@/pesayetu/config";

const { items } = dataVisuals;
const [item] = items;

export default {
  title: "Components/DataVisualCard",
  argTypes: {},
};

const Template = ({ ...args }) => <DataVisualCard {...args} />;

export const Default = Template.bind({});

Default.args = item;
