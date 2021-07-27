import React from "react";

import SearchSelect from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/SelectSearch",
  argTypes: {},
};

const Template = ({ ...args }) => <SearchSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...navigationArgs.selectProps,
};
