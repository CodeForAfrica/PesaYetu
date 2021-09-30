import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Input from "@/pesayetu/components/Select";

const ChartFilter = ({ label, options, selected, ...props }) => {
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

ChartFilter.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

ChartFilter.defaultProps = {
  label: undefined,
  selected: undefined,
  options: undefined,
};

export default ChartFilter;
