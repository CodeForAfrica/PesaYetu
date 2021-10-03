import A from "@commons-ui/core/A";
import LogoButton from "@commons-ui/core/LogoButton";
import { useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "238px",
    height: "55px",
  },
}));

function NavigationLogo({ desktopArgs, mobileArgs, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const logoArgs = isDesktop ? desktopArgs : mobileArgs;
  return (
    <LogoButton {...logoArgs} component={A} classes={{ root: classes.root }} />
  );
}

NavigationLogo.propTypes = {
  desktopArgs: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
  }),
  mobileArgs: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
  }),
};

NavigationLogo.defaultProps = {
  desktopArgs: undefined,
  mobileArgs: undefined,
};

export default NavigationLogo;
