import React from "react";

import PanelButtonGroup from ".";

import { panelArgs } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/PanelButtonGroup",
  argTypes: {},
};

const Template = ({ ...args }) => <PanelButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = panelArgs;
