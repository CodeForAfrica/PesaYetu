// import {
//   Typography,
//   InputLabel,
//   FormControl,
//   Select,
//   MenuItem,
// } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Input from "@/pesayetu/components/Select";

const ChartFiler = ({ label, options, selected, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Input
        label={label}
        classes={{ select: classes.select }}
        options={options}
        selected={selected}
      />
    </div>
  );
};

ChartFiler.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

ChartFiler.defaultProps = {
  label: undefined,
  selected: undefined,
  options: undefined,
};

export default ChartFiler;
