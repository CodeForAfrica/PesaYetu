import { Tooltip, Typography, LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Source from "@/pesayetu/components/HURUmap/Source";

const KeyMetric = ({
  className,
  formattedValue,
  value: valueProp,
  title,
  color,
  description,
  parentName,
  parentFormattedValue,
  metadata: { source, url },
  ...props
}) => {
  const classes = useStyles(props);

  if (!((valueProp || formattedValue) && title)) {
    return null;
  }
  const value = formattedValue || valueProp;
  const parentValue =
    description || parentFormattedValue
      ? `${parentFormattedValue} ${parentName}`
      : undefined;

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.metric}>
        <Typography variant="h3">{value}</Typography>
        <Tooltip title={title}>
          <Typography
            variant="caption"
            className={clsx(classes.text, classes.title)}
          >
            {title}
          </Typography>
        </Tooltip>
        <LinearProgress
          classes={{
            root: classes.progressBar,
            determinate: classes.progressBarDeterminate,
          }}
          value={parseFloat(value.replace(",", ""))}
          color={color}
          variant="determinate"
        />
      </div>
      {parentValue && (
        <Typography
          variant="caption"
          className={clsx(classes.text, classes.description)}
        >
          {parentValue}
        </Typography>
      )}
      <Source href={url} classes={{ root: classes.source }}>
        {source}
      </Source>
    </div>
  );
};

KeyMetric.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  formattedValue: PropTypes.string,
  metadata: PropTypes.shape({
    source: PropTypes.string,
    url: PropTypes.string,
  }),
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
  metadata: undefined,
  title: undefined,
  value: undefined,
  parentName: undefined,
  parentFormattedValue: undefined,
};

export default KeyMetric;
