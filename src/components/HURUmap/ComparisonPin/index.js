import { Button } from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Select from "@/pesayetu/components/Select";

const ComparisonPin = ({ icon, label, helperText }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
        <div className={classes.icon}>
          <Icon src={icon} layout="fill" />
        </div>
      </Button>
      <Select helperText={helperText} label={label} />
      <hr className={classes.underline} />
    </div>
  );
};

ComparisonPin.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
};

ComparisonPin.defaultProps = {
  helperText: undefined,
  label: undefined,
  icon: undefined,
};

export default ComparisonPin;
