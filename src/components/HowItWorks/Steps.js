import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import FindFactsContent from './FindFactsContent';
import VisualizeContent from './VisualizeContent';
import GetContext from './GetContext';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  facts: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '10.07143rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      width: '13.4286rem' // 188px / 14
    }
  },
  visual: {
    width: '100%',
    padding: '2/856rem 0',
    [theme.breakpoints.up('md')]: {
      width: '10.286rem', // .75 of lg
      marginLeft: '2.57143rem', // 36px / 14
      marginRight: '2.64286rem', // 37px / 14
      padding: 0
    },
    [theme.breakpoints.up('lg')]: {
      width: '13.7143rem' // 192px / 14
    }
  },
  context: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '9.796875rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      width: '14.9286rem' // 209px / 14
    }
  }
});
function Steps({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item className={classes.facts}>
        <FindFactsContent />
      </Grid>
      <Grid item className={classes.visual}>
        <VisualizeContent />
      </Grid>
      <Grid item>
        <GetContext />
      </Grid>
    </Grid>
  );
}

Steps.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Steps);
