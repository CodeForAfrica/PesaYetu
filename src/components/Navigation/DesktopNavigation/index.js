import A from "@commons-ui/core/A";
import LogoButton from "@commons-ui/core/LogoButton";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/pesayetu/components/Image";
import Menu from "@/pesayetu/components/Menu";
import Section from "@/pesayetu/components/Section";

const useStyles = makeStyles(() => ({
  root: {},
  logoButton: {},
  section: {},
}));

function DesktopNavigation({
  logoProps,
  menuProps,
  desktopLogoProps,
  mobileLogoProps,
  socialLinks,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const logoArgs = isDesktop ? desktopLogoProps : mobileLogoProps;

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <LogoButton
              component={A}
              classes={{ logoButton: classes.logoButton }}
            >
              <Image
                width={logoArgs.width}
                height={logoArgs.height}
                {...logoArgs}
              />
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
    src: PropTypes.shape({}),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  mobileLogoProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.shape({}),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

DesktopNavigation.defaultProps = {
  logoProps: undefined,
  menuProps: undefined,
  socialLinks: undefined,
  desktopLogoProps: undefined,
  mobileLogoProps: undefined,
};

export default DesktopNavigation;
