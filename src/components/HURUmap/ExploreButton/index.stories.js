import React from "react";

import ExploreButton from ".";

import pinIcon from "@/pesayetu/assets/Component122.svg";
import pinBlack from "@/pesayetu/assets/icons/office-push-pin.svg";
import locationIcon from "@/pesayetu/assets/icons/pin.svg";

export default {
  title: "Components/HURUmap/ExploreButton",
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreButton {...args} />;

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
