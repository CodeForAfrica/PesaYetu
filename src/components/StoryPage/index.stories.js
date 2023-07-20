import React from "react";

import StoryPage from ".";

import storyImage from "@/pesayetu/assets/images/stephen-dawson-qwtCeJ5cLYs-unsplash.png";

export default {
  title: "Sections/StoryPage",
  argTypes: {},
};

function Template({ ...args }) {
  return <StoryPage {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Our new website is out",
  date: "September 2021",
  content:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, nec malesuada lacinia aptent torquent senectus curae lectus, neque gravida aenean dignissim tortor pharetra tellus. Platea vitae tortor etiam congue hac lectus egestas",
  children: "Share",
  socialLinks: [
    { name: "facebook", alt: "facebook" },
    { name: "twitter", alt: "twitter" },
    { name: "linkedin", alt: "linkedin" },
    { name: "share", alt: "share" },
    { name: "email", alt: "email" },
  ],
  image: storyImage,
  category: "Insights",
  author: "Jacopo Ottaviani",
};
