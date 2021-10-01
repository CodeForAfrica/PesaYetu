import React from "react";

import TreeView from "@/pesayetu/components/HURUmap/TreeView";
import { treeViewArgs } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/TreeView",
  argTypes: {},
};

const Template = ({ ...args }) => <TreeView {...args} />;

export const Default = Template.bind({});

Default.args = treeViewArgs;
