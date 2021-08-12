import React from "react";

import Insights from ".";

import Group8522 from "@/pesayetu/assets/Group852-2.svg";
import { insightStories } from "@/pesayetu/config";

export default {
  title: "Sections/Insights",
  argTypes: {
    featuredStoryProps: {
      control: {
        type: "object",
      },
    },
    items: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Insights {...args} />;

export const Default = Template.bind({});

Default.args = {
  featuredStoryProps: {
    title: "Our new website is out and it comes with new advanced features.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
    href: "/?path=/story/components-featured-story-card--default",
    ctaText: "Read More",
    image: Group8522,
  },
  items: insightStories.items,
};
