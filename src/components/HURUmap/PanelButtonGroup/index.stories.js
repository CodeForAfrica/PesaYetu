import React from "react";

import PanelButtonGroup from ".";

import pinIcon from "@/pesayetu/assets/Component122.svg";
import mapIcon from "@/pesayetu/assets/icons/kenya.svg";
import locationIcon from "@/pesayetu/assets/icons/location-pin.svg";
import pinBlack from "@/pesayetu/assets/icons/office-push-pin.svg";

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
