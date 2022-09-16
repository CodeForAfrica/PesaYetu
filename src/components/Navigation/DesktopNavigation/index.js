import LogoButton from "@commons-ui/core/LogoButton";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/pesayetu/components/Image";
import Link from "@/pesayetu/components/Link";
import Menu from "@/pesayetu/components/Menu";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(() => ({
  root: {},
  logoButton: {
    paddingLeft: 0,
  },
  section: {},
}));

function DesktopNavigation({
  logoProps,
  menuProps,
  desktopLogoProps,
  socialLinks,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <LogoButton
              href="/"
              component={Link}
              className={classes.logoButton}
            >
              <Image {...desktopLogoProps} />
            </LogoButton>
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
  desktopLogoProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

DesktopNavigation.defaultProps = {
  logoProps: undefined,
  menuProps: undefined,
  socialLinks: undefined,
  desktopLogoProps: undefined,
};

export default DesktopNavigation;
