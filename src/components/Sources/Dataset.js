import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  source: {},
  text: {},
  title: {},
  date: {
    color: "#707070",
    fontSize: typography.pxToRem(11),
    lineHeight: 13.2 / 11,
    [breakpoints.up("lg")]: {
      fontSize: typography.pxToRem(11),
      lineHeight: 13.2 / 11,
    },
  },
  resourceType: {
    backgroundColor: palette.divider,
    color: "#666666",
    display: "inline-flex",
    fontSize: typography.pxToRem(10),
    fontWeight: 600,
    letterSpacing: typography.pxToRem(0.8),
    lineHeight: 16 / 10,
    margin: `${typography.pxToRem(12)} ${typography.pxToRem(20)} 0 0`,
    padding: typography.pxToRem(12),
    textTransform: "uppercase",
    [breakpoints.up("lg")]: {
      margin: `0 0 0 ${typography.pxToRem(20)}`,
    },
  },
  cta: {},
}));

function Dataset({
  classes: classesProp,
  ctaText,
  date,
  href,
  title,
  types,
  ...props
}) {
  const {
    source,
    text,
    title: titleClass,
    date: dateClass,
    resourceType,
    cta,
  } = classesProp || {};
  const classes = useStyles({
    classes: {
      source,
      text,
      title: titleClass,
      date: dateClass,
      resourceType,
      cta,
    },
    ...props,
  });

  return (
    <div className={classes.source}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={undefined} lg={1} />
        <Grid item xs={12} lg={6}>
          <Grid container flexDirection="column">
            <Grid item xs={12}>
              <RichTypography className={clsx(classes.text, classes.title)}>
                {title}
              </RichTypography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={clsx(classes.date)}>{date}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3} container>
          {types?.map((name) => (
            <Grid item key={name}>
              <Typography align="center" className={classes.resourceType}>
                {name}
              </Typography>
            </Grid>
          )) ?? null}
        </Grid>
        <Grid item xs={12} lg={2}>
          <Typography variant="body2" className={classes.cta}>
            <Link href={href} underline="always">
              {ctaText}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Dataset.propTypes = {
  classes: PropTypes.shape({
    source: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    resourceType: PropTypes.string,
    cta: PropTypes.string,
  }),
  ctaText: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

Dataset.defaultProps = {
  classes: undefined,
  ctaText: undefined,
  date: undefined,
  description: undefined,
  href: undefined,
  title: undefined,
  types: undefined,
};

export default Dataset;
