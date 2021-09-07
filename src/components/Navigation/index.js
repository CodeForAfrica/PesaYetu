import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import ExploreNavigation from "./ExploreNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    backgroundColor: palette.background.default,
  },
  section: {},
  toolbar: {
    display: "block",
    padding: `${typography.pxToRem(12)} 0`,
  },
}));

function Navigation({ variant, ...props }) {
  const classes = useStyles(props);

  return (
    <AppBar color="primary" position="sticky" className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Hidden mdDown implementation="css">
          {variant && variant === "explore" ? (
            <ExploreNavigation
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
        <Hidden lgUp implementation="css">
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
