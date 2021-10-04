import React from "react";

import Panel from ".";

import { panelArgs } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/Panel",
  argTypes: {},
};

const Template = ({ ...args }) => <Panel {...args} />;

export const Default = Template.bind({});

Default.args = panelArgs;
