import { RichTypography } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  firstTitle: {
    color: palette.secondary.main,
    fontWeight: "bold",
    letterSpacing: 0,
  },
  secondTitle: {
    color: palette.primary.main,
    fontWeight: "bold",
    letterspacing: 0,
  },
  subtitle: {
    display: "flex",
    flexDirection: "column",
    padding: `${typography.pxToRem(11)} ${typography.pxToRem(24)}`,
    letterSpacing: `${typography.pxToRem(1.32)}`,
    color: palette.grey.dark,
    textTransform: "uppercase",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
}));

function Logo({
  firstTitle,
  secondTitle,
  firstSubtitle,
  secondSubtitle,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <RichTypography variant="h1">
        {firstTitle && <span className={classes.firstTitle}>{firstTitle}</span>}
        {secondTitle && (
          <span className={classes.secondTitle}>{secondTitle}</span>
        )}
      </RichTypography>
      <RichTypography variant="caption" className={classes.subtitle}>
        {firstSubtitle && <span>{firstSubtitle}&nbsp;</span>}
        {secondSubtitle && <span>{secondSubtitle}</span>}
      </RichTypography>
    </div>
  );
}

Logo.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  firstSubtitle: PropTypes.string,
  secondSubtitle: PropTypes.string,
};

Logo.defaultProps = {
  firstTitle: undefined,
  secondTitle: undefined,
  firstSubtitle: undefined,
  secondSubtitle: undefined,
};

export default Logo;
