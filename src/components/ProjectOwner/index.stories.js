import React from "react";

import ProjectOwner from ".";

export default {
  title: "Components/ProjectOwner",
};

const Template = ({ ...args }) => <ProjectOwner {...args} />;
export const Default = Template.bind({});

Default.args = {
  name: "Code for Africa",
  description: "This site is a Code for Africa project.",
  logo: {
    alt: "",
    title: "Group 4462",
    caption: "",
    description: "",
    id: 115,
    link: "https://cms.dev.codeforafrica.org/pesayetu/group-4462/",
    url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
    sizes: {
      thumbnail: {
        height: 150,
        width: 150,
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
        orientation: "landscape",
      },
      medium: {
        height: 300,
        width: 300,
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
        orientation: "landscape",
      },
      large: {
        height: 1024,
        width: 1024,
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
        orientation: "landscape",
      },
      full: {
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
        height: 123,
        width: 212,
        orientation: "landscape",
      },
    },
  },
  link: "https://codeforafrica.org",
};
