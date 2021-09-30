import React from "react";

import NavigationLogo from ".";

import desktopLogo from "@/pesayetu/assets/logos/Component 61 – 1@2x.png";

const logoArgs = {
  alt: "Code for Africa",
  href: "https://codeforafrica.org",
  src: desktopLogo,
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
  logoArgs,
};
