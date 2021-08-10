import React from "react";

import AboutTeamCard from "@/pesayetu/components/AboutTeamCard";
import { aboutTeam } from "@/pesayetu/config";

const { items } = aboutTeam;
const [item] = items;

export default {
  title: "Components/About Team Card",
  argTypes: {},
};

const Template = ({ ...args }) => <AboutTeamCard {...args} />;

export const Default = Template.bind({});

Default.args = item;
