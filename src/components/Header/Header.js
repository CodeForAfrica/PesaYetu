import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';

import withWidth from '@material-ui/core/withWidth';

import Navigation from './Navigation';
import useCloseModalOnPopstate from '../../useCloseModalOnPopstate';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem',
      margin: '0 auto'
    }
  },
  modalNavigation: {
    padding: '1.875rem 0',
    [theme.breakpoints.up('md')]: {
      padding: '1.875rem 0'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '3.125rem 0'
    },
    position: 'relative',
    width: '100%'
  }
});

function Header({ classes, children, ...props }) {
  useCloseModalOnPopstate();
  return (
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Navigation />

        {React.cloneElement(children, {
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          ...props
        })}
      </Grid>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default withRouter(withWidth()(withStyles(styles)(Header)));
