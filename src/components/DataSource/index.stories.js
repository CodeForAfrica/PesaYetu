import React from "react";

import DataSource from ".";

export default {
  title: "Components/DataSource",
};

const Template = (args) => <DataSource {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Data sources",
  subtitle:
    "All data can be found Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  items: [
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
    {
      cover:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/report.png",
      title: "County Government of Nairobi",
    },
  ],
};
