import React from 'react';

import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3.125rem'
    }
  },
  layout: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '66.5rem',
      margin: '0 auto'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '81.3571429rem',
      margin: '0 auto'
    }
  }
});

function ChartsContainer({ classes, children }) {
  return (
    <div className={classes.root}>
      <Grid container className={classes.layout}>
        {children}
      </Grid>
    </div>
  );
}

ChartsContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ChartsContainer.defaultProps = {
  children: null
};

export default withStyles(styles)(ChartsContainer);
