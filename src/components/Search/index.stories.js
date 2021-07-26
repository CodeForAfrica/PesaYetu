import React from "react";

import Search from ".";

export default {
  title: "Components/Search",
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "....",
};
