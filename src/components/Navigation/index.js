import { AppBar, Hidden, Toolbar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import ExploreNavigation from "./ExploreNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(
  ({ palette, typography, zIndex, breakpoints }) => ({
    root: {
      backgroundColor: palette.background.default,
      zIndex: zIndex.modal,
    },
    section: {},
    toolbar: {
      display: "flex",
      alignItems: "center",
      padding: `0`,
      [breakpoints.up("lg")]: {
        padding: `${typography.pxToRem(12)} 0`,
      },
    },
    navigation: {
      flexGrow: 1,
    },
  })
);

function Navigation({ variant, ...props }) {
  const classes = useStyles(props);

  return (
    <AppBar color="primary" position="sticky" className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Hidden mdDown implementation="css" className={classes.navigation}>
          {variant?.toLowerCase() === "explore" ? (
            <ExploreNavigation
              variant="explore"
              {...props}
              classes={{ section: classes.section }}
            />
          ) : (
            <DesktopNavigation
              {...props}
              classes={{ section: classes.section }}
            />
          )}
        </Hidden>
        <Hidden lgUp implementation="css" className={classes.navigation}>
          <MobileNavigation {...props} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  variant: PropTypes.string,
};

Navigation.defaultProps = {
  variant: undefined,
};

export default Navigation;
