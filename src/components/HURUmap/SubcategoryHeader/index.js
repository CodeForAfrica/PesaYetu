import { RichTypography } from "@commons-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import slugify from "@/pesayetu/utils/slugify";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
    borderTop: `solid 1px ${palette.divider}`,
  },
  title: {
    textTransform: "uppercase",
    paddingBottom: typography.pxToRem(20),
    paddingTop: typography.pxToRem(20),
    fontWeight: "400",
    fontColor: "#1c2030",
    letterSpacing: typography.pxToRem(2),
    scrollMarginTop: typography.pxToRem(110),
  },
  description: {
    paddingBottom: typography.pxToRem(20),
    "& p": {
      margin: 0,
    },
  },
}));

const SubcategoryHeader = ({ title, description, ...props }) => {
  const classes = useStyles(props);

  if (!title) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography id={slugify(title)} variant="h5" className={classes.title}>
        {title}
      </Typography>
      <RichTypography variant="body2" className={classes.description}>
        {description}
      </RichTypography>
    </div>
  );
};

SubcategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SubcategoryHeader.defaultProps = {
  title: undefined,
  description: undefined,
};

export default SubcategoryHeader;
