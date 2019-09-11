import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import About from './About';
import Community from './Community';
import Project from './Project';

import background from '../../assets/images/bg/background.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '3.64rem',
    paddingLeft: '2.143rem',
    paddingBottom: '3.286rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '6rem',
      paddingLeft: 0,
      paddingBottom: '3.857rem'
    }
  },
  layout: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem',
      margin: '0 auto'
    }
  },
  about: {
    [theme.breakpoints.up('md')]: {
      paddingRight: 12
    }
  },
  organisation: {
    width: '100%',
    marginTop: '1.857rem', // 26px / 16
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      marginTop: 0
    }
  },
  community: {}
});

function Footer({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid container className={classes.layout} direction="row">
        <Grid item xs={7} className={classes.about}>
          <About />
        </Grid>
        <Grid item xs={5} className={classes.organisation}>
          <Grid container justify="flex-end">
            <Grid item className={classes.community}>
              <Community />
            </Grid>
            <Grid item>
              <Project />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Footer);
