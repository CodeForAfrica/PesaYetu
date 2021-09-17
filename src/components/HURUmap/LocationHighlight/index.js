import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function LocationHighlight({ formattedValue, value, title, ...props }) {
  const classes = useStyles(props);

  if (!(value && title)) {
    return null;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.value}>
        {formattedValue || value}
      </Typography>
    </Box>
  );
}

LocationHighlight.propTypes = {
  formattedValue: PropTypes.string,
  value: PropTypes.number,
  title: PropTypes.string,
};

LocationHighlight.defaultProps = {
  formattedValue: undefined,
  value: undefined,
  title: undefined,
};

export default LocationHighlight;
