import React from "react";

import PanelButtonGroup from ".";

import pinIcon from "@/pesayetu/assets/Component122.svg";
import pinBlack from "@/pesayetu/assets/icons/office-push-pin.svg";
import locationIcon from "@/pesayetu/assets/icons/pin.svg";

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
      color: "primary",
    },
    {
      label: "Overview",
      value: "#2",
      icon: locationIcon,
      color: "primary",
    },
    {
      label: "Overview",
      value: "#3",
      icon: pinBlack,
      color: "secondary",
      disabled: true,
    },
  ],
};
