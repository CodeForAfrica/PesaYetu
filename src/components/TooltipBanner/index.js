import { Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  tagline: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(20)}`,
  },
  divider: {
    height: typography.pxToRem(2),
  },
}));

function TooltipBanner({ tagline, ctaText, ...props }) {
  const classes = useStyles(props);
  const handleClick = (event) => {
    event.preventDefault();
    // open toolbox
  };
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      {tagline && (
        <Typography variant="h5" className={classes.tagline}>
          {tagline}
        </Typography>
      )}
      {ctaText && (
        <Button variant="text" onClick={handleClick}>
          {ctaText}
        </Button>
      )}
    </div>
  );
}

TooltipBanner.propTypes = {
  ctaText: PropTypes.string,
  tagline: PropTypes.string,
};

TooltipBanner.defaultProps = {
  ctaText: undefined,
  tagline: undefined,
};

export default TooltipBanner;
