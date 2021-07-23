import React from "react";

import FeaturedStoryCard from ".";

import cardImage from "@/pesayetu/assets/images/stephen-dawson-qwtCeJ5cLYs-unsplash.png";

export default {
  title: "Components/FeaturedStoryCard",
  argTypes: {
    ctaText: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <FeaturedStoryCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Our new website is out and it comes with new advanced features.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
  href: "#",
  ctaText: "Read More",
  image: cardImage,
};
