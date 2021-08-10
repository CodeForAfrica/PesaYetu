/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import OurCourseCard from "@/pesayetu/components/OurCourseCard";
import { ourCourses } from "@/pesayetu/config";

const { items } = ourCourses;
const [dataItem] = items;

export default {
  title: "Components/Course ard",
  argTypes: {},
};

const Template = ({ ...args }) => <OurCourseCard {...args} />;

export const Default = Template.bind({});

Default.args = dataItem;
