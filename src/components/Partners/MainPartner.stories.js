import React from "react";

import MainPartner from "./MainPartner";

export default {
  title: "Components/MainPartner",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    link: {
      control: {
        type: "text",
      },
    },
    logo: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ ...args }) => <MainPartner {...args} />;
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
