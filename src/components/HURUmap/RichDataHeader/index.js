import { Typography, Grid, SvgIcon } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const RichDataHeader = ({ title, type, parent, printIcon }) => {
  const classes = useStyles();

  if (!(title && parent)) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <SvgIcon component={printIcon} className={classes.svgIcon} />
      </Grid>
      <Typography variant="subtitle2" className={classes.description}>
        {`A ${type} in ${parent}`}
      </Typography>
      <hr className={classes.underline} />
    </div>
  );
};

RichDataHeader.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  parent: PropTypes.string,
  printIcon: PropTypes.string,
};

RichDataHeader.defaultProps = {
  title: undefined,
  type: undefined,
  parent: undefined,
  printIcon: undefined,
};

export default RichDataHeader;
