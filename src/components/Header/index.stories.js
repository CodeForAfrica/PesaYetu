/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Header from ".";

export default {
  title: "Components/Header",
};

const Template = ({ title, ...args }) => <Header {...args}>{title}</Header>;

export const Default = Template.bind({});

Default.args = {
  overline: "Overline",
  title: 'Title with <span class="highlight">Highlight</span>',
  subtitle: "A short paragraph to describe what the header is all about.",
};
