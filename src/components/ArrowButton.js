import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import arrowBlack from '../assets/images/icons/black-combined-shape.svg';
import arrow from '../assets/images/icons/combined-shape.svg';

const styles = theme => ({
  root: {
    paddingTop: '2rem'
  },
  button: {
    pointerEvents: 'all',
    textTransform: 'none',
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    color: 'black',
    height: '4rem',
    width: '100%',
    border: '2px solid black',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    [theme.breakpoints.up('sm')]: {
      width: 'unset'
    }
  },
  buttonSecondary: {
    border: '2px solid'
  },
  arrow: {
    pointerEvents: 'all',
    marginLeft: -theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

function ArrowButton({ secondary, classes, children, onClick }) {
  return (
    <Grid item sm={12} container alignItems="center" className={classes.root}>
      <Button
        variant="outlined"
        onClick={onClick}
        className={classNames(classes.button, {
          [classes.buttonSecondary]: secondary
        })}
      >
        {children}
      </Button>
      <img
        src={secondary ? arrow : arrowBlack}
        alt="Select Arrow"
        className={classes.arrow}
      />
    </Grid>
  );
}

ArrowButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool
};

ArrowButton.defaultProps = {
  secondary: false
};

export default withStyles(styles)(ArrowButton);
