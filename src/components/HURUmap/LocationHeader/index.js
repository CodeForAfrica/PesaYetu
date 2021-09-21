import { Typography, Grid, Button } from "@material-ui/core";
import Icon from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const LocationHeader = ({ level, parent, title, icon }) => {
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
        {/* <SvgIcon component={icon} className={classes.svgIcon} /> */}
        <Button variant="contained" className={classes.button}>
          <div className={classes.icon}>
            <Icon src={icon} layout="fill" />
          </div>
        </Button>
      </Grid>
      <Typography variant="subtitle2" className={classes.description}>
        {`A ${level} in ${parent}`}
      </Typography>
      <hr className={classes.underline} />
    </div>
  );
};

LocationHeader.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
  parent: PropTypes.string,
  icon: PropTypes.string,
};

LocationHeader.defaultProps = {
  title: undefined,
  level: undefined,
  parent: undefined,
  icon: undefined,
};

export default LocationHeader;
