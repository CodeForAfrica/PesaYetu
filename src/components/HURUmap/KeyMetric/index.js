import { Typography, LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const KeyMetric = ({
  className,
  formattedValue,
  value: valueProp,
  title,
  color,
  description: descriptionProp,
  parentName,
  parentFormattedValue,
  ...props
}) => {
  const classes = useStyles(props);

  if (!((valueProp || formattedValue) && title)) {
    return null;
  }
  const value = formattedValue || valueProp;
  const description =
    descriptionProp || parentFormattedValue
      ? `${parentFormattedValue} ${parentName}`
      : undefined;

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.metric}>
        <Typography variant="h3">{value}</Typography>
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
  parentName: PropTypes.string,
  parentFormattedValue: PropTypes.string,
};

KeyMetric.defaultProps = {
  className: undefined,
  color: undefined,
  description: undefined,
  formattedValue: undefined,
  title: undefined,
  value: undefined,
  parentName: undefined,
  parentFormattedValue: undefined,
};

export default KeyMetric;
