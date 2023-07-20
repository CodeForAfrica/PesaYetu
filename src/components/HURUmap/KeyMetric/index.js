import { Tooltip, Typography, LinearProgress } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Source from "@/pesayetu/components/HURUmap/Source";

const KeyMetric = ({
  className,
  formattedValue: formattedValueProp,
  value: valueProp,
  title,
  color,
  description,
  displayFormat,
  parentName,
  parentFormattedValue,
  metadata: { source, url } = {},
  ...props
}) => {
  const classes = useStyles(props);

  if (!((valueProp || formattedValueProp) && title)) {
    return null;
  }
  const formattedValue = formattedValueProp ?? valueProp;
  const parentValue =
    description || parentFormattedValue
      ? `${parentFormattedValue} ${parentName}`
      : undefined;
  const value = valueProp ?? formattedValueProp;
  const tooltipTitle = `${title}: ${formattedValue}`;

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.metric}>
        <Typography variant="h3">{formattedValue}</Typography>
        <Tooltip title={tooltipTitle}>
          <Typography
            variant="caption"
            className={clsx(classes.text, classes.title)}
          >
            {title}
          </Typography>
        </Tooltip>
        {displayFormat?.localeCompare("percentage", undefined, {
          sensitivity: "accent",
        }) === 0 ? (
          <LinearProgress
            classes={{
              root: classes.progressBar,
              determinate: classes.progressBarDeterminate,
            }}
            value={parseFloat(`${value}`.replace(",", ""))}
            color={color}
            variant="determinate"
          />
        ) : null}
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
  displayFormat: PropTypes.string,
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
  displayFormat: undefined,
  formattedValue: undefined,
  metadata: undefined,
  title: undefined,
  value: undefined,
  parentName: undefined,
  parentFormattedValue: undefined,
};

export default KeyMetric;
