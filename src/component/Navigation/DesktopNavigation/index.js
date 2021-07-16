import { Section } from '@commons-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

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
function DesktopNavigation({ ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item className={classes.logo}>
            <Typography>area one</Typography>
          </Grid>
          <Grid
            item
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

DesktopNavigation.propTypes = {};

DesktopNavigation.defaultProps = {};

export default DesktopNavigation;
