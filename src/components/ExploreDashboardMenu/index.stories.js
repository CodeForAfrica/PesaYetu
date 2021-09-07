import React from "react";

import ExploreDashboardMenu from "@/pesayetu/components/ExploreDashboardMenu";

export default {
  title: "Components/ExploreDashboardMenu",
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreDashboardMenu {...args} />;

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
