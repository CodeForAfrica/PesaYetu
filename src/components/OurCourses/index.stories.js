import React from "react";

import OurCourses from "@/pesayetu/components/OurCourses";
import { ourCourses } from "@/pesayetu/config";

export default {
  title: "Sections/OurCourses",
  argTypes: {},
};

function Template({ ...args }) {
  return <OurCourses {...args} />;
}

export const Default = Template.bind({});

Default.args = ourCourses;
