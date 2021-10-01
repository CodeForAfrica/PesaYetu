import React from "react";

import ChartTooltip from "@/pesayetu/components/HURUmap/ChartTooltip";

export default {
  title: "Components/HURUmap/ChartTooltip",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    formattedValue: {
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
  title: "15-24",
  value: "1456000",
  group: "cat2",
  groupColor: "#7DB2D3",
};
