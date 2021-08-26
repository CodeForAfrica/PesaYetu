import React from "react";

import DataSources from ".";

export default {
  title: "Sections/DataSources",
};

const Template = (args) => <DataSources {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Data sources",
  subtitle:
    "All data can be found Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  items: [
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
    {
      title: "County Government of Nairobi",
    },
  ],
  image:
    "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/Report-mockup.png",
};
