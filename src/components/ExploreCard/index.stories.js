/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import ExploreCard from "@/pesayetu/components/ExploreCard";
import { exploreTools } from "@/pesayetu/config";

export default {
  title: "Components/ExploreCard",
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: exploreTools.items[0],
};
