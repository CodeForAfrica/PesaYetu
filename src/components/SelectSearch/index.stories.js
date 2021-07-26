import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import SearchSelect from ".";

import { config } from "@/pesayetu/config";

const { footerArgs } = config;

export default {
  title: "Components/SelectSearch",
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => (
  <div style={{ backgroundColor: "#0067A3", padding: "1rem" }}>
    <SearchSelect {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...footerArgs.selectProps,
};
