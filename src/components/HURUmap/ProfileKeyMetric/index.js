import { Typography, LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const ProfileKeyMetric = ({ percentage, description, color, summary }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.dataSection}>
        {percentage && <Typography variant="h3">{`${percentage}%`}</Typography>}
        {description && (
          <Typography
            variant="caption"
            className={clsx(classes.text, classes.description)}
          >
            {description}
          </Typography>
        )}
        {percentage && (
          <LinearProgress
            className={classes.progressBar}
            value={percentage}
            color={color}
            variant="buffer"
          />
        )}
      </div>
      {summary && (
        <Typography
          variant="caption"
          className={clsx(classes.summary, classes.text)}
        >
          {summary}
        </Typography>
      )}
    </div>
  );
};

ProfileKeyMetric.propTypes = {
  percentage: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  summary: PropTypes.string,
};

ProfileKeyMetric.defaultProps = {
  percentage: undefined,
  description: undefined,
  color: undefined,
  summary: undefined,
};

export default ProfileKeyMetric;
