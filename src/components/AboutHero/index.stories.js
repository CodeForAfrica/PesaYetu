import React from "react";

import AboutHero from ".";

export default {
  title: "Sections/AboutHero",
};

function Template({ ...args }) {
  return <AboutHero {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  overline: "ABOUT",
  title: "<span class='highlight' >Project </span> background and team",
  subtitle:
    "Learn more about the team behind the project, the development stages and how you can help improve PesaYetu.",
};
