import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(() => ({
  source: {},
  text: {},
  title: {},
  date: {},
  cta: {},
}));

function Document({
  classes: classesProp,
  ctaText,
  date,
  href,
  title,
  ...props
}) {
  const {
    source,
    text,
    title: titleClass,
    date: dateClass,
    cta,
  } = classesProp || {};
  const classes = useStyles({
    classes: {
      source,
      text,
      title: titleClass,
      date: dateClass,
      cta,
    },
    ...props,
  });

  return (
    <div className={classes.source}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={1}>
          <Typography
            variant="body1"
            className={clsx(classes.text, classes.date)}
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <RichTypography
            variant="body1"
            className={clsx(classes.text, classes.title)}
          >
            {title}
          </RichTypography>
        </Grid>
        <Grid item xs={12} lg={1}>
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

Document.propTypes = {
  classes: PropTypes.shape({
    source: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    cta: PropTypes.string,
  }),
  ctaText: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};

Document.defaultProps = {
  classes: undefined,
  ctaText: undefined,
  date: undefined,
  href: undefined,
  title: undefined,
};

export default Document;
