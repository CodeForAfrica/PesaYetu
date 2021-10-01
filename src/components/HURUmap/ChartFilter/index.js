import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Select from "@/pesayetu/components/Select";

const ChartFilter = ({ label, options, selected, helperText, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Select
        helperText={helperText}
        label={label}
        classes={{ select: classes.select }}
        options={options}
        selected={selected}
      />
    </div>
  );
};

ChartFilter.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

ChartFilter.defaultProps = {
  helperText: undefined,
  label: undefined,
  selected: undefined,
  options: undefined,
};

export default ChartFilter;
