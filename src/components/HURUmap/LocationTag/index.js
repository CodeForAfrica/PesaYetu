import { Box, LinearProgress, Typography, IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { capitalize } from "@mui/material/utils";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as CancelIcon } from "@/pesayetu/assets/icons/Component108-4.svg";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: ({ active, variant }) => {
    let color = palette.text.primary;
    let backgroundColor = palette.background.default;
    if (variant === "highlight") {
      const value = active ? 1.0 : 0.8;
      color = palette.text.secondary;
      backgroundColor = alpha("#1C2030", value); // #1C2030CC
    }
    return {
      backgroundColor,
      borderRadius: typography.pxToRem(4),
      boxShadow: "0px 3px 6px #00000029",
      color,
      height: typography.pxToRem(36),
      position: "relative",
      minWidth: typography.pxToRem(88),
    };
  },
  cancelBtn: {
    position: "absolute",
    top: -68,
    color: "#ebebeb",
    "&:hover": {
      color: "#666666",
      "& .Component108-4_svg__b": {
        stroke: palette.text.secondary,
      },
    },
  },
  level: {
    borderRadius: typography.pxToRem(4),
    position: "absolute",
    top: typography.pxToRem(-8),
  },
  levelPrimary: {
    background: palette.primary.main,
  },
  levelSecondary: {
    background: palette.secondary.main,
  },
  levelLoaded: {
    color: palette.text.secondary,
    fontWeight: "bold",
    fontSize: typography.pxToRem(7),
    letterSpacing: "0.56px",
    lineHeight: 10 / 7,
    padding: `${typography.pxToRem(4)} ${typography.pxToRem(12)}`,
    textAlign: "center",
    textTransform: "uppercase",
  },
  levelLoading: {
    height: typography.pxToRem(18),
    width: typography.pxToRem(56),
  },
  name: {
    fontSize: typography.pxToRem(9),
    fontWeight: "bold",
    lineHeight: 13 / 9,
    margin: "auto",
    textTransform: "capitalize",
  },
}));

function LocationTag({
  active,
  className,
  classes: classesProp,
  code,
  color,
  isLoading,
  level,
  name: nameProp,
  onClick,
  variant,
  ...props
}) {
  const classes = useStyles({
    active,
    classes: classesProp,
    variant,
    ...props,
  });
  if (!(isLoading || (nameProp && level))) {
    return null;
  }
  const handleClick = (e) => {
    if (onClick && !isLoading) {
      onClick(e, { code, level, name: nameProp });
    }
  };

  const name = isLoading ? "…" : nameProp;
  return (
    <Box
      {...props}
      onClick={handleClick}
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      className={clsx(classes.root, className)}
    >
      {variant === "marker" ? (
        <IconButton className={classes.cancelBtn}>
          <CancelIcon />
        </IconButton>
      ) : null}
      {isLoading ? (
        <LinearProgress className={clsx(classes.level, classes.levelLoading)} />
      ) : (
        <Typography
          component="h6"
          className={clsx(
            classes.level,
            classes[`level${capitalize(color)}`],
            classes.levelLoaded
          )}
        >
          {level}
        </Typography>
      )}
      <Typography component="span" className={classes.name}>
        {name}
      </Typography>
    </Box>
  );
}

LocationTag.propTypes = {
  active: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string,
    level: PropTypes.string,
    levelLoaded: PropTypes.string,
    levelLoading: PropTypes.string,
    name: PropTypes.string,
    cancelBtn: PropTypes.string,
  }),
  className: PropTypes.string,
  code: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
  isLoading: PropTypes.bool,
  level: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "highlight", "marker"]),
};

LocationTag.defaultProps = {
  active: true,
  classes: undefined,
  className: undefined,
  code: undefined,
  color: "primary",
  isLoading: undefined,
  level: undefined,
  name: undefined,
  onClick: undefined,
  variant: "default",
};

export default LocationTag;
