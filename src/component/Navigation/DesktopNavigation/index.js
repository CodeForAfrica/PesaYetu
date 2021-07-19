import { Section } from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationLogo from '@/pesayetu/component/NavigationLogo';

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
function DesktopNavigation({ logoProps, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <NavigationLogo {...logoProps} />
          </Grid>
          <Grid
            item
            xs={8}
            container
            justify="flex-end"
            alignItems="center"
            className={classes.menu}
          >
            <Typography>area one</Typography>
          </Grid>
          <Grid className={classes.search} item>
            <Typography>area one</Typography>
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
