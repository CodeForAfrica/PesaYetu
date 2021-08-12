import React from "react";

import Index from ".";

export default {
  title: "Components/Supporting Partners",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      partners: {
        control: {
          type: "array",
        },
      },
    },
  },
};

const Template = ({ ...args }) => <Index {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: "Supporting Partners",
  items: [
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
    {
      logo: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/partner-logo_4@2x.png",
    },
  ],
};
