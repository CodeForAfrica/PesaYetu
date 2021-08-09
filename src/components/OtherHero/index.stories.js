/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Hero from ".";

import accentImage from "@/pesayetu/assets/images/Group 4780.svg";
import image from "@/pesayetu/assets/images/sat-mtKenya-2@2x.png";

export default {
  title: "Sections/OtherHero",
  argTypes: {
    tagline: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "select",
      },
    },
  },
};

const Template = ({ ...args }) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  intro: "Stories",
  accentImage,
  title: "Data-driven news and insights",
  tagline:
    "Explore these curated stories showcasing how you can create impactful and informative pieces using data visualisations.",
  image,
};
