import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Map from './Map';
import Description from './Description';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '2.286rem 0',
    paddingLeft: '2.143rem', // 30px / 16
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0 // 30px / 16
    },
    [theme.breakpoints.up('xl')]: {}
  },
  wrapper: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '66.59rem' // .75 of lg
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  description: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '5.286rem', // 74px / 16
      paddingLeft: '5.286rem' // 74px / 16
    }
  },
  imageAlign: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '-9.07143rem'
    }
  }
});

function HowItWorks({ classes, dominion }) {
  return (
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Hidden smDown>
          <Grid item className={classes.imageAlign}>
            <Map />
          </Grid>
        </Hidden>

        <Grid item className={classes.description}>
          <Description dominion={dominion} />
        </Grid>
      </Grid>
    </div>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.shape().isRequired,
  dominion: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(HowItWorks);
