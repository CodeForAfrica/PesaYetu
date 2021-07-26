import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.text.secondary,
  },
  section: {
    padding: `0 ${typography.pxToRem(21)} 0 ${typography.pxToRem(17)}`,
    margin: 0,
    width: "100%",
    [breakpoints.up("lg")]: {
      padding: `0 0 0 ${typography.pxToRem(100)}`,
      margin: "0 auto",
      maxWidth: typography.pxToRem(1196),
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
