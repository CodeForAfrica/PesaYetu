import { RichTypography } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/pesayetu/components/Link";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  link: {
    textDecoration: "none",
    "&:hover, &:focus, &:focus-within": {
      textDecoration: "none",
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
    padding: `${typography.pxToRem(10)}`,
    letterSpacing: `${typography.pxToRem(1.32)}`,
    color: palette.grey.dark,
    textTransform: "uppercase",
    justifyContent: "center",
    fontSize: "9px",
    [breakpoints.up("lg")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
      fontSize: "12px",
    },
  },
}));

function Logo({
  href,
  firstTitle,
  secondTitle,
  firstSubtitle,
  secondSubtitle,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <Link href={href} className={classes.link}>
      <div className={classes.root}>
        <RichTypography variant="h1">
          {firstTitle && (
            <span className={classes.firstTitle}>{firstTitle}</span>
          )}
          {secondTitle && (
            <span className={classes.secondTitle}>{secondTitle}</span>
          )}
        </RichTypography>
        <RichTypography variant="caption" className={classes.subtitle}>
          {firstSubtitle && <span>{firstSubtitle}&nbsp;</span>}
          {secondSubtitle && <span>{secondSubtitle}</span>}
        </RichTypography>
      </div>
    </Link>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  firstSubtitle: PropTypes.string,
  secondSubtitle: PropTypes.string,
};

Logo.defaultProps = {
  href: undefined,
  firstTitle: undefined,
  secondTitle: undefined,
  firstSubtitle: undefined,
  secondSubtitle: undefined,
};

export default Logo;
