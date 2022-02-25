import React from "react";

import Panel from ".";

import { hurumapArgs, panelArgs } from "@/pesayetu/config";

const { locations } = hurumapArgs;

export default {
  title: "Components/HURUmap/Panel",
  argTypes: {},
};

const Template = ({ ...args }) => <Panel {...args} />;

export const Default = Template.bind({});

Default.args = {
  locations,
  ...panelArgs,
};
