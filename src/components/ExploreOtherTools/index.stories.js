/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import ExploreOtherTools from ".";

import { exploreTools } from "@/pesayetu/config";

export default {
  title: "Sections/ExploreOtherTools",
};

function Template({ ...args }) {
  return <ExploreOtherTools {...args} />;
}

export const Default = Template.bind({});

Default.args = exploreTools;
