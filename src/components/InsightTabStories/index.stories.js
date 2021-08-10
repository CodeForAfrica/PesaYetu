import React from "react";

import InsightTabStories from ".";

import { insightData } from "@/pesayetu/config";

export default {
  title: "Components/InsightTabStories",
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <InsightTabStories {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: insightData,
};
