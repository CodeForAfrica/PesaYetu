import { Typography, LinearProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Metrics = ({ percentage, description, color, summary }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3">{`${percentage}%`}</Typography>
        <div className={classes.description}>
          <Typography variant="caption" className={classes.text}>
            {description}
          </Typography>
        </div>
        <LinearProgress
          className={classes.progressBar}
          value={percentage}
          color={color}
          variant="buffer"
        />
      </div>
      <Typography
        variant="caption"
        className={`${classes.summary} ${classes.text}`}
      >
        {summary}
      </Typography>
    </>
  );
};

Metrics.propTypes = {
  percentage: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  summary: PropTypes.string,
};

Metrics.defaultProps = {
  percentage: undefined,
  description: undefined,
  color: undefined,
  summary: undefined,
};

export default Metrics;
