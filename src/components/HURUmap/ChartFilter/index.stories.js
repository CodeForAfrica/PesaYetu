import React from "react";

import ChartFilter from "@/pesayetu/components/HURUmap/ChartFilter";

export default {
  title: "Components/HURUmap/ChartFilter",
  argTypes: {},
};

function Template(args) {
  return <ChartFilter {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  attributeText: "Filter by attribute:",
  valueText: "Select a value:",
  groups: [
    {
      subindicators: [
        "65",
        "25-35",
        "15-24",
        "55-64",
        "45-54",
        "36-44",
        "0-14",
      ],
      dataset: 8,
      name: "age",
      can_aggregate: true,
      can_filter: true,
    },
    {
      subindicators: ["Female", "Male"],
      dataset: 8,
      name: "gender",
      can_aggregate: true,
      can_filter: true,
    },
    {
      subindicators: [
        "Indian or Asian",
        "White",
        "Black African",
        "Coloured",
        "Other",
      ],
      dataset: 8,
      name: "race",
      can_aggregate: true,
      can_filter: true,
    },
  ],
};
