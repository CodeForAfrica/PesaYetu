import React from "react";

import Tutorial from "@/pesayetu/components/HURUmap/Tutorial";
import { tour } from "@/pesayetu/config";

export default {
  title: "Components/HURUmap/Tutorial",
  argTypes: {},
};

const Template = ({ ...args }) => <Tutorial {...args} />;

export const Default = Template.bind({});

Default.args = tour;
