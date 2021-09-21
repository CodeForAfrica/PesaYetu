import React from "react";

import ChartTooltip from "@/pesayetu/components/HURUmap/ChartTooltip";

export default {
  title: "Components/HURUmap/ChartTooltip",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    percentValue: {
      control: {
        type: "text",
      },
    },
    group: {
      control: {
        type: "text",
      },
    },
    groupColor: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <ChartTooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "15-24",
  value: "1456000",
  percentValue: "45%",
  group: "cat2",
  groupColor: "#7DB2D3",
};
