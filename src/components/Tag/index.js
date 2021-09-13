import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    flex: "0 auto",
    position: "relative",
    height: typography.pxToRem(32),
    margin: typography.pxToRem(4),
    padding: `${typography.pxToRem(3)} ${typography.pxToRem(
      8
    )} ${typography.pxToRem(0)} ${typography.pxToRem(8)}`,
    border: "1px solid transparent",
    borderRadius: typography.pxToRem(3),
    backgroundColor: "#707070",
    transition: "all .2s ease",
    width: "5.5rem",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
  },
  locationTagType: {
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    background: "#0067A3",
    position: "absolute",
    top: typography.pxToRem(-7),
    bottom: "auto",
    height: typography.pxToRem(12),
    padding: `${typography.pxToRem(0)} ${typography.pxToRem(4)}`,
    borderRadius: typography.pxToRem(2),
    fontSize: typography.pxToRem(9.6),
    letterSpacing: typography.pxToRem(1),
    whiteSpace: "nowrap",
  },
  tag: {
    fontSize: typography.pxToRem(7),
    color: "#fff",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  label: {
    fontSize: typography.pxToRem(9),
    color: "#fff",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "capitalize",
    letterSpacing: "0.72px",
  },
}));

function Tag({ tag, label, ...props }) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item className={classes.locationTagType}>
        <Typography variant="caption" className={classes.tag}>
          {tag}
        </Typography>
      </Grid>
      <Grid item className={classes.locationLabel}>
        <Typography variant="caption" className={classes.label}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
};

Tag.defaultProps = {
  tag: undefined,
  label: undefined,
};

export default Tag;
