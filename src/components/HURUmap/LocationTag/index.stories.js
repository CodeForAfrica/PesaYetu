import React from "react";

import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";
import { hurumapArgs } from "@/pesayetu/config";

const {
  location: { tags },
} = hurumapArgs;

export default {
  title: "Components/HURUmap/LocationTag",
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "highlight"],
    },
  },
};

const Template = ({ ...args }) => <LocationTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  active: true,
  isLoading: false,
  ...tags[1],
  variant: "default",
};
