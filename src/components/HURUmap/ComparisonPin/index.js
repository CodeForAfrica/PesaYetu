import { Button } from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Select from "@/pesayetu/components/Select";

const ComparisonPin = ({ icon, label, helperText, options, ...props }) => {
  const classes = useStyles(props);
  const [open, isOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
        <div className={`${classes[`icon${open}`]}`}>
          <Icon src={icon} layout="fill" />
        </div>
      </Button>
      <Select
        helperText={helperText}
        label={label}
        options={options}
        onOpen={() => isOpen(!open)}
        onClose={() => isOpen(!open)}
      />
      <hr className={classes.underline} />
    </div>
  );
};

ComparisonPin.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

ComparisonPin.defaultProps = {
  helperText: undefined,
  label: undefined,
  icon: undefined,
  options: undefined,
};

export default ComparisonPin;
