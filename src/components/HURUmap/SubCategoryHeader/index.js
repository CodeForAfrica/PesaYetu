import { RichTypography } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const SubCategoryHeader = ({ title, description, ...props }) => {
  const classes = useStyles(props);

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <RichTypography variant="body2" className={classes.description}>
        {description}
      </RichTypography>
    </div>
  );
};

SubCategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SubCategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
};

export default SubCategoryHeader;
