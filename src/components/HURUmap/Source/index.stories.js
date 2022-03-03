import React from "react";

import Source from ".";

export default {
  title: "Components/Source",
  argTypes: {},
};

function Template({ ...args }) {
  return <Source {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  name: "Source Name",
  url: "Source Url",
};
