import { AppBar, Box, Toolbar } from "@mui/material";
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
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            width: "100%",
          }}
        >
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
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
            width: "100%",
          }}
        >
          <MobileNavigation {...props} />
        </Box>
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
