import React from "react";

import TreeView from "@/pesayetu/components/HURUMap/TreeView";

export default {
  title: "Hurumap/TreeView",
  argTypes: {},
};

const Template = ({ ...args }) => <TreeView {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: "Overview",
      path: "1",
      children: [
        { path: "", label: "Population" },
        { path: "", label: "Political" },
        { path: "", label: "Land Use" },
      ],
    },
    {
      label: "Revenue",
      path: "2",
      children: [
        { path: "", label: "Population" },
        { path: "", label: "Political" },
        { path: "", label: "Land Use" },
      ],
    },
  ],
};
