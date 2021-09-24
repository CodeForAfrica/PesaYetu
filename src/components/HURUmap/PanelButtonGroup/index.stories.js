import React from "react";

import PanelButtonGroup from ".";

import pinIcon from "@/pesayetu/assets/icons/Component 95 – 2.svg";
import pinBlack from "@/pesayetu/assets/icons/Component 96 – 12.svg";
import locationIcon from "@/pesayetu/assets/icons/Component 97 – 2.svg";
import mapIcon from "@/pesayetu/assets/icons/Component 98 – 2.svg";

export default {
  title: "Components/HURUmap/PanelButtonGroup",
  argTypes: {},
};

const Template = ({ ...args }) => <PanelButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "#1",
  items: [
    {
      label: "Overview",
      value: "#1",
      icon: pinIcon,
    },
    {
      label: "Overview",
      value: "#2",
      icon: pinBlack,
    },
    {
      label: "Overview",
      value: "#3",
      icon: locationIcon,
      disabled: true,
    },
    {
      label: "Overview",
      value: "#4",
      icon: mapIcon,
      disabled: true,
    },
  ],
};
