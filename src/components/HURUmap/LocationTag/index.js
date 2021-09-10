import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    background: palette.background.default,
    boxShadow: "0px 3px 6px #00000029",
    height: typography.pxToRem(36),
    width: typography.pxToRem(88),
    borderRadius: typography.pxToRem(4),
    position: "relative",
    display: "flex",
  },
  level: {
    fontWeight: "bold",
    color: "#fff",
    background: "#0067A3",
    textTransform: "upperCase",
    fontSize: typography.pxToRem(7),
    borderRadius: typography.pxToRem(4),
    paddingTop: typography.pxToRem(2),
    width: typography.pxToRem(62),
    height: typography.pxToRem(17),
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: typography.pxToRem(-8),
    left: typography.pxToRem(13),
  },
  name: {
    fontSize: typography.pxToRem(9),
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "auto",
  },
}));

function LocationTag({ level, name, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography component="div" className={classes.level}>
        {level}
      </Typography>
      <Typography className={classes.name}>{name}</Typography>
    </div>
  );
}

LocationTag.propTypes = {
  level: PropTypes.string,
  name: PropTypes.string,
};

LocationTag.defaultProps = {
  level: undefined,
  name: undefined,
};

export default LocationTag;
