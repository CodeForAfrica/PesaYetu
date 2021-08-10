import React from "react";

import AboutHero from ".";

export default {
  title: "Sections/AboutHero",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    tagline: {
      control: {
        type: "text",
      },
    },
    intro: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...args }) => <AboutHero {...args} />;

export const Default = Template.bind({});

Default.args = {
  intro: "ABOUT",
  title: "<span class='highlight' >Project </span> background and team",
  tagline:
    "Learn more about the team behind the project, the development stages and how you can help improve PesaYetu.",
};
