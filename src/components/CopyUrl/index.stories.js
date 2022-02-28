import React from "react";

import CopyUrl from ".";

import { ReactComponent as CopyIcon } from "@/pesayetu/assets/icons/Group 4105.svg";

export default {
  title: "Components/CopyToClipBoard",
};

const Template = ({ ...args }) => (
  <CopyUrl {...args}>
    <CopyIcon />
  </CopyUrl>
);

export const Default = Template.bind({});

Default.args = {
  text: "Example text",
};
