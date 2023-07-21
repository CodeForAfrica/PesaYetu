import React from "react";

import Card from ".";

import { insightData, aboutTeam } from "@/pesayetu/config";

const [insightItem] = insightData.items;
const [teamItem] = aboutTeam.items;

export default {
  title: "Components/Card",
  argTypes: {
    card: {
      control: {
        type: "select",
      },
      options: ["insight", "team"],
    },
  },
};

function Template({ card }) {
  const args = card === "insight" ? insightItem : teamItem;
  const mediaProps = card === "insight" ? undefined : { square: true };

  return <Card {...args} mediaProps={mediaProps} />;
}

export const Default = Template.bind({});

Default.args = {
  card: "insight",
};
