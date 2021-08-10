import React from "react";

import AboutTeam from ".";

import { aboutTeam } from "@/pesayetu/config";

export default {
  title: "Sections/About Team",
};

const Template = ({ ...args }) => <AboutTeam {...args} />;

export const Default = Template.bind({});

Default.args = aboutTeam;
