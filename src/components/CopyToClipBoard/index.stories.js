import React from "react";

import CopyToClipBoard from ".";

export default {
  title: "Components/CopyToClipBoard",
};

const Template = ({ ...args }) => <CopyToClipBoard {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "hellow hellow",
};
