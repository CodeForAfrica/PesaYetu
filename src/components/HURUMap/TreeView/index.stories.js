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
      path: "",
      children: [
        { path: "", label: "Population" },
        { path: "", label: "Political" },
        { path: "", label: "Land Use" },
      ],
    },
    {
      label: "Revenue",
      path: "",
      children: [
        { path: "", label: "Population" },
        { path: "", label: "Political" },
        { path: "", label: "Land Use" },
      ],
    },
  ],
};
