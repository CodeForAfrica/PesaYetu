import React from "react";

import NavigationTabs from ".";

export default {
  title: "Components/NavigationTabs",
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

const Template = ({ ...args }) => <NavigationTabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstLabel: "News",
  secondLabel: "Insights",
  firstChild: "News content goes here",
  secondChild: "Insight content goes here",
};
