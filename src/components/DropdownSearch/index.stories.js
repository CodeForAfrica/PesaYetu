import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import DropdownSearch from ".";

import { navigationArgs } from "@/pesayetu/config";

export default {
  title: "Components/DropdownSearch",
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
      <DropdownSearch {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-dropdownsearch--default",
  },
};

Default.args = {
  ...navigationArgs.selectProps,
};
