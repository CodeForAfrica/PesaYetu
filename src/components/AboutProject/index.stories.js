import React from "react";

import AboutProject from ".";

export default {
  title: "Sections/AboutProject",
};

function Template({ ...args }) {
  return <AboutProject {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "ABOUT THE PROJECT",
  subtitle:
    "Learn more about the team behind the project, the development stages and how you can help improve PesaYetu.",
  ctaText: "Learn More",
  href: "#",
};
