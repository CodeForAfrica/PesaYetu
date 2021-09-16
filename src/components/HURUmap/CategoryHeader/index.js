import { Typography, SvgIcon } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const CategoryHeader = ({ title, description, icon }) => {
  const classes = useStyles();

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <SvgIcon
          className={classes.svgIcon}
          component={icon}
          viewBox="0 0 130 130"
        />
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

CategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

CategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
  icon: undefined,
};

export default CategoryHeader;
