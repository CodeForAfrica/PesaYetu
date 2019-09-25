import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { withRouter } from 'react-router-dom';

import withWidth from '@material-ui/core/withWidth';
import useCloseModalOnPopstate from '../../useCloseModalOnPopstate';

import Navigation from './Navigation';

const useStyles = makeStyles(theme => ({
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
}));

function Header({ children, ...props }) {
  const classes = useStyles(props);
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default withRouter(withWidth()(Header));
