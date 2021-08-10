import React from "react";

import InsightTabStories from ".";

import cardImage from "@/pesayetu/assets/images/stephen-dawson-qwtCeJ5cLYs-unsplash.png";
import { insightDataStories } from "@/pesayetu/config";

export default {
  title: "Components/InsightTabStories",
  argTypes: {
    featuredInsightProps: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <InsightTabStories {...args} />;

export const Default = Template.bind({});

Default.args = {
  featuredInsightProps: {
    title: "Our new website is out and it comes with new advanced features.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
    href: "/?path=/story/components-featured-story-card--default",
    ctaText: "Read More",
    image: cardImage,
  },
  insightDataProps: insightDataStories,
};
