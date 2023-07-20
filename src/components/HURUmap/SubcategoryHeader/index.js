import { RichTypography } from "@commons-ui/core";
import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
    borderTop: `solid 1px ${palette.divider}`,
  },
  title: {
    color: "#1c2030",
    fontWeight: 400,
    letterSpacing: typography.pxToRem(2),
    paddingBottom: typography.pxToRem(20),
    paddingTop: typography.pxToRem(20),
    // In mobile, we need to account for navbar + category tabs
    scrollMarginTop: typography.pxToRem(160),
    textTransform: "uppercase",
    [breakpoints.up("lg")]: {
      scrollMarginTop: typography.pxToRem(110),
    },
  },
  description: {
    paddingBottom: typography.pxToRem(20),
    "& p": {
      margin: 0,
    },
  },
}));

function SubcategoryHeader({ title, description, ...props }) {
  const classes = useStyles(props);

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography {...props} variant="h5" className={classes.title}>
        {title}
      </Typography>
      <RichTypography variant="body2" className={classes.description}>
        {description}
      </RichTypography>
    </div>
  );
}

SubcategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SubcategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
};

export default SubcategoryHeader;
