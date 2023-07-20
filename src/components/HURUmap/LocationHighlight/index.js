import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function LocationHighlight({
  className,
  formattedValue: formattedValueProp,
  isLoading,
  value: valueProp,
  title: titleProp,
  ...props
}) {
  const classes = useStyles(props);

  if (!(isLoading || ((valueProp || formattedValueProp) && titleProp))) {
    return null;
  }

  const title = titleProp || (isLoading && "…");
  const formattedValue = isLoading ? "…" : formattedValueProp || valueProp;
  return (
    <Box
      alignItems="center"
      display="inline-flex"
      flexDirection="column"
      flexGrow={1}
      className={clsx(classes.root, className)}
    >
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.value}>
        {formattedValue}
      </Typography>
    </Box>
  );
}

LocationHighlight.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  formattedValue: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};

LocationHighlight.defaultProps = {
  className: undefined,
  isLoading: undefined,
  formattedValue: undefined,
  title: undefined,
  value: undefined,
};

export default LocationHighlight;
