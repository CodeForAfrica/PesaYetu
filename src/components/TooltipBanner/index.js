import { Button, Divider, Hidden, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(70)}`,
  },
  divider: {
    height: typography.pxToRem(2),
  },
  tagline: {
    marginTop: typography.pxToRem(40),
  },
  cta: {
    marginTop: typography.pxToRem(20),
  },
}));

function TooltipBanner({ tagline, ctaText, ...props }) {
  const classes = useStyles(props);

  return (
    <Hidden lgDown implementation="css">
      <div className={classes.root}>
        <Section className={classes.section}>
          <Divider className={classes.divider} />
          {tagline && (
            <Typography variant="h5" className={classes.tagline}>
              {tagline}
            </Typography>
          )}
          {ctaText && (
            <Button
              variant="text"
              component={Link}
              href="/explore/ke?showTutorial=1"
              className={classes.cta}
            >
              {ctaText}
            </Button>
          )}
        </Section>
      </div>
    </Hidden>
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
