/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import StoriesInsights from "@/pesayetu/components/StoriesInsights";

export default {
  title: "Sections/StoriesInsights",
  argTypes: {},
};

const Template = ({ ...args }) => <StoriesInsights {...args} />;

export const Default = Template.bind({});

Default.args = {
  overline: "Stories",
  title: "Your County in <span class='highlight'>data</span>",
  items: [
    {
      title: "Isiolo v Samburu Voter registration discrepancy 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      ctaText: "Read more",
      href: "/?path=/story/sections-storiesinsights--default",
      chart:
        '<iframe width="100%" scrolling="no" frameborder="0" title="ICU facilities in South Africa" src="https://dashboard.covid19.outbreak.africa/wp-json/hurumap-data/flourish/735/"></iframe>',
    },
    {
      title: "Land Ownership",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      ctaText: "Read more",
      href: "/?path=/story/sections-storiesinsights--default",
      chart:
        '<iframe width="100%" src="https://dominion.africa/embed/country-ZA/section-0TIrZM_Wj/chart-9VAjiM15T" /></iframe>',
    },
    {
      title: "Isiolo v Samburu Voter registration discrepancy 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      ctaText: "Read more",
      href: "/?path=/story/sections-storiesinsights--default",
      chart:
        '<iframe width="100%" src="https://dominion.africa/embed/country-ZA/section-K-fkSD-f/chart-HtZtHlMi"></iframe>',
    },
  ],
};
