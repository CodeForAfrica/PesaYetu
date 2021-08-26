/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import DataFilter from ".";

export default {
  title: "Components/DataIndicators",
};

const Template = ({ ...args }) => <DataFilter {...args} />;

export const Default = Template.bind({});
