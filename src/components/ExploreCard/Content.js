import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Content = ({ title, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
    </>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Content.defaultProps = {
  title: undefined,
  description: undefined,
};

export default Content;
