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
  items: [
    {
      label: "Overview",
      href: "#1",
      icon: pinIcon,
    },
    {
      label: "Overview",
      href: "#2",
      icon: locationIcon,
    },
    {
      label: "Overview",
      href: "#3",
      icon: pinBlack,
    },
  ],
};
