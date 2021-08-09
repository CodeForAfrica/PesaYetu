import React from "react";

import Tabs from ".";

export default {
  title: "Components/Tabs",
  argTypes: {
    firstLabel: {
      control: {
        type: "text",
      },
    },
    secondLabel: {
      control: {
        type: "text",
      },
    },
    firstChild: {
      control: {
        type: "text",
      },
    },
    secondChild: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstLabel: "News",
  secondLabel: "Insights",
  firstChild: "News content goes here",
  secondChild: "Insight content goes here",
};
