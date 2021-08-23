import React from "react";

import DataSource from ".";

export default {
  title: "Components/DataSource",
};

const Template = (args) => <DataSource {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "History",
  subtitle:
    "The PesaYetu data portal was built as part of the ‘Our County: Our Responsibility’ project, which started back in 2019.",
  items: [],
};
