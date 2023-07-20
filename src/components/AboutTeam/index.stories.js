import React from "react";

import AboutTeam from ".";

import { aboutTeam } from "@/pesayetu/config";

export default {
  title: "Sections/AboutTeam",
};

function Template({ ...args }) {
  return <AboutTeam {...args} />;
}

export const Default = Template.bind({});

Default.args = aboutTeam;
