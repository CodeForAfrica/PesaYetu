import React from 'react';

import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#EDEDEE',
    flexGrow: 1,
    paddingBottom: '1rem'
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
}));

function ChartsContainer({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container className={classes.layout}>
        {children}
      </Grid>
    </div>
  );
}

ChartsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ChartsContainer.defaultProps = {
  children: null
};

export default ChartsContainer;
