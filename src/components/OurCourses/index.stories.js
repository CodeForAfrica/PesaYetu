import React from "react";

import OurCourseCard from "@/pesayetu/components/OurCourseCard";
import { ourCourses } from "@/pesayetu/config";

export default {
  title: "Sections/OurCourses",
  argTypes: {},
};

const Template = ({ ...args }) => <OurCourseCard {...args} />;

export const Default = Template.bind({});

Default.args = ourCourses;
