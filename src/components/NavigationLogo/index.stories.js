import React from "react";

import NavigationLogo from ".";

const desktopArgs = {
  alt: "Code for Africa desktop",
  href: "https://codeforafrica.org",
  src: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/10/Component-61-–-1.svg",
};
const mobileArgs = {
  alt: "Code for Africa mobile",
  href: "https://codeforafrica.org",
  src: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/10/Screenshot-2021-10-01-at-14.32.36.png",
};

export default {
  title: "Components/NavigationLogo",
  argTypes: {},
};

const Template = ({ ...args }) => {
  return <NavigationLogo {...args} />;
};
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-navigationlogo--defaultt",
  },
};

Default.args = {
  desktopArgs,
  mobileArgs,
};
