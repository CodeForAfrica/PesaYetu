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

const ChartFiler = ({ label, options, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Input
        label={label}
        classes={{ select: classes.test }}
        options={options}
        // selected="All values"
      />
    </div>
  );
};

ChartFiler.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

ChartFiler.defaultProps = {
  label: undefined,
  options: undefined,
};

export default ChartFiler;
