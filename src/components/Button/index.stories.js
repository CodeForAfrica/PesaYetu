/* eslint-disable import/no-anonymous-default-export */
import { Button } from "@mui/material";
import React from "react";

export default {
  title: "Components/Button",
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    href: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["text", "contained"],
    },
  },
};

function Template({ label, ...args }) {
  return <Button {...args}>{label}</Button>;
}

export const Default = Template.bind({});

Default.args = {
  variant: "text",
  size: "medium",
  color: "default",
  href: "https://dev.pesayetu.pesacheck.org",
  label: "Button text",
};
