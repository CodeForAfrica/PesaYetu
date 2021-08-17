import { Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography }) => ({
  tagline: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(20)}`,
  },
  divider: {
    height: typography.pxToRem(2),
  },
}));

function Banner({ tagline, ctaText, ...props }) {
  const classes = useStyles(props);
  const handleClick = (event) => {
    event.preventDefault();
    // open toolbox
  };
  return (
    <>
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
    </>
  );
}

Banner.propTypes = {
  ctaText: PropTypes.string,
  tagline: PropTypes.string,
};

Banner.defaultProps = {
  ctaText: undefined,
  tagline: undefined,
};

export default Banner;
