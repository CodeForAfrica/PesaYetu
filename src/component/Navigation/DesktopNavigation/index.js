import { Section } from '@commons-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import MenuNavigation from '@/pesayetu/component/MenuNavigation';
import NavigationLogo from '@/pesayetu/component/NavigationLogo';
import SocialMediaIcons from '@/pesayetu/component/SocialMediaIcons';

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: `${typography.pxToRem(9.25)} 0`,
  },
  section: {},
  logoButtonRoot: {
    paddingLeft: 0,
  },
  linkTypo: {
    color: 'black',
    padding: `0 ${typography.pxToRem(32)}`,
  },
  logo: {
    width: typography.pxToRem(271),
  },
  menu: {
    width: typography.pxToRem(625),
    paddingRight: typography.pxToRem(42),
  },
  search: {
    width: typography.pxToRem(200),
  },
}));

const menuButtons = [
  {
    href: 'https://dev.pesayetu.pesacheck.org',
    label: 'EXPLORE',
    menuLinks: [
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'DATA',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'STORIES',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'HOW IT WORKS',
      },
    ],
  },
];
function DesktopNavigation({ logoProps, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <NavigationLogo {...logoProps} />
          </Grid>
          <Grid
            item
            xs={7}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className={classes.menu}
          >
            <MenuNavigation links={menuButtons} />
            <SocialMediaIcons />
          </Grid>
          <Grid />
        </Grid>
      </Section>
    </div>
  );
}

DesktopNavigation.propTypes = {
  logoProps: PropTypes.shape({}),
};

DesktopNavigation.defaultProps = {
  logoProps: undefined,
};

export default DesktopNavigation;
