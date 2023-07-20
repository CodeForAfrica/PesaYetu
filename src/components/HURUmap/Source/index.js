import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  name: {
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    color: "#666666",
    display: "inline-flex",
    fontWeight: 500,
  },
  link: {
    color: palette.text.primary,
    fontSize: typography.pxToRem(13),
    lineHeight: 20 / 13,
    fontFamily: typography.body1.fontFamily,
    fontWeight: 500,
  },
}));

function Source({ children, href, ...props }) {
  const classes = useStyles(props);
  if (!(href && children)) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>Source:&nbsp;</Typography>
      <Link underline="always" href={href} className={classes.link}>
        {children}
      </Link>
    </div>
  );
}

Source.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
};

Source.defaultProps = {
  children: undefined,
  href: undefined,
};

export default Source;
