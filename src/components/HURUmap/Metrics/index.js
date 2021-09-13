import { Typography, LinearProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Metrics = ({
  percentage,
  description,
  color,
  bottomDescription,
  value,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3">{percentage}</Typography>
        <div className={classes.description}>
          <Typography variant="caption">{description}</Typography>
        </div>
        <LinearProgress
          className={classes.progressBar}
          value={value}
          color={color}
          variant="buffer"
        />
      </div>
      <Typography variant="caption" className={classes.bottomDescription}>
        {bottomDescription}
      </Typography>
    </>
  );
};

Metrics.propTypes = {
  percentage: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  bottomDescription: PropTypes.string,
  value: PropTypes.number,
};

Metrics.defaultProps = {
  percentage: undefined,
  description: undefined,
  color: undefined,
  bottomDescription: undefined,
  value: undefined,
};

export default Metrics;
