import React from "react";

import Tag from ".";

export default {
  title: "Components/Tag",
  argTypes: {
    tag: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  tag: "Country",
  label: "South Africa",
};
