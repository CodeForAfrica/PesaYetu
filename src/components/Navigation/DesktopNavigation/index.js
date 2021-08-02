import { Section } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Logo from "@/pesayetu/components/Logo";
import Menu from "@/pesayetu/components/Menu";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: `${typography.pxToRem(9.25)} 0`,
  },
  section: {},
  logoButtonRoot: {
    paddingLeft: 0,
  },
  linkTypo: {
    color: "black",
    padding: `0 ${typography.pxToRem(32)}`,
  },
  logo: {
    width: typography.pxToRem(271),
  },
  search: {
    width: typography.pxToRem(200),
  },
}));
function DesktopNavigation({ logoProps, menuProps, socialLinks, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Logo {...logoProps} />
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Menu links={menuProps} socialLinks={socialLinks} />
          </Grid>
          <Grid />
        </Grid>
      </Section>
    </div>
  );
}

DesktopNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
  menuProps: PropTypes.arrayOf(PropTypes.shape({})),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
};

DesktopNavigation.defaultProps = {
  logoProps: undefined,
  menuProps: undefined,
  socialLinks: undefined,
};

export default DesktopNavigation;
