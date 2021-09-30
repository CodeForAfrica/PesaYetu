import A from "@commons-ui/core/A";
import LogoButton from "@commons-ui/core/LogoButton";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
}));

function NavigationLogo({ logoArgs, ...props }) {
  const classes = useStyles(props);
  return (
    <LogoButton
      {...logoArgs}
      component={A}
      classes={{ section: classes.section }}
    />
  );
}

NavigationLogo.propTypes = {
  logoArgs: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
  }),
};

NavigationLogo.defaultProps = {
  logoArgs: undefined,
};

export default NavigationLogo;
