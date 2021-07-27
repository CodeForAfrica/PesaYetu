import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import SearchSelect from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/SelectSearch",
  argTypes: {},
};

const Template = ({ ...args }) => {
  const classes = makeStyles(() => ({
    root: {
      backgroundColor: "#0067A3",
      padding: "1rem",
    },
  }))();

  return (
    <div className={classes.root}>
      <SearchSelect {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...navigationArgs.selectProps,
};
