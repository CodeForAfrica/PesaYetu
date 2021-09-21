import { Typography, LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const KeyMetric = ({
  className,
  formattedValue,
  value,
  title,
  color,
  description,
  ...props
}) => {
  const classes = useStyles(props);

  if (!(value && title)) {
    return null;
  }
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.metric}>
        <Typography variant="h3">{formattedValue || value}</Typography>
        <Typography
          variant="caption"
          className={clsx(classes.text, classes.title)}
        >
          {title}
        </Typography>
        <LinearProgress
          classes={{
            root: classes.progressBar,
            determinate: classes.progressBarDeterminate,
          }}
          value={value}
          color={color}
          variant="determinate"
        />
      </div>
      {description && (
        <Typography
          variant="caption"
          className={clsx(classes.text, classes.description)}
        >
          {description}
        </Typography>
      )}
    </div>
  );
};

KeyMetric.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  formattedValue: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};

KeyMetric.defaultProps = {
  className: undefined,
  color: undefined,
  description: undefined,
  formattedValue: undefined,
  title: undefined,
  value: undefined,
};

export default KeyMetric;
