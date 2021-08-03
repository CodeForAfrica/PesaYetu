import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  root: {
    backgroundColor: palette.background.default,
  },
  section: {
    width: "100%",
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(1190),
    },
  },
  toolbar: {
    display: "block",
  },
}));

function Navigation({ ...props }) {
  const classes = useStyles(props);

  return (
    <AppBar color="primary" position="sticky" className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Hidden mdDown implementation="css">
          <DesktopNavigation
            {...props}
            classes={{ section: classes.section }}
          />
        </Hidden>
        <Hidden lgUp implementation="css">
          <MobileNavigation {...props} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
