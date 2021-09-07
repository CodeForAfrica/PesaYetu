import React from "react";

import BarChart from ".";

export default {
  title: "Components/BarChart",
  argTypes: {},
};

const Template = ({ ...args }) => <BarChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    { a: "C", b: 2 },
    { a: "C", b: 7 },
    { a: "C", b: 4 },
    { a: "D", b: 1 },
    { a: "D", b: 2 },
    { a: "D", b: 6 },
    { a: "E", b: 8 },
    { a: "E", b: 4 },
    { a: "E", b: 7 },
  ],
};
