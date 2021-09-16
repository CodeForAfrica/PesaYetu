import { Typography, LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const KeyMetric = ({ formattedValue, title, color, description }) => {
  const classes = useStyles();

  if (!(formattedValue && title)) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.dataSection}>
        <Typography variant="h3">{formattedValue}</Typography>
        <Typography
          variant="caption"
          className={clsx(classes.text, classes.title)}
        >
          {title}
        </Typography>
        <LinearProgress
          className={classes.progressBar}
          value={formattedValue}
          color={color}
          variant="buffer"
        />
      </div>
      <Typography
        variant="caption"
        className={clsx(classes.description, classes.text)}
      >
        {description}
      </Typography>
    </div>
  );
};

KeyMetric.propTypes = {
  formattedValue: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
};

KeyMetric.defaultProps = {
  formattedValue: undefined,
  title: undefined,
  color: undefined,
  description: undefined,
};

export default KeyMetric;
