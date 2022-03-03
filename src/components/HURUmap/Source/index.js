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

function Source({ name, url, ...props }) {
  const classes = useStyles(props);
  if (!(url && name)) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>Source:&nbsp;</Typography>
      <Link underline="always" href={url} className={classes.link}>
        {name}
      </Link>
    </div>
  );
}

Source.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

Source.defaultProps = {
  name: undefined,
  url: undefined,
};

export default Source;
