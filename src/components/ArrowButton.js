import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Button } from '@material-ui/core';

import arrowBlack from '../assets/images/icons/black-combined-shape.svg';
import arrow from '../assets/images/icons/combined-shape.svg';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem'
  },
  button: {
    pointerEvents: 'all',
    textTransform: 'none',
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    height: '4rem',
    color: props => (props.secondary ? 'white' : 'black'),
    width: '100%',
    border: props => (props.secondary ? '2px solid white' : '2px solid black'),
    paddingLeft: '4rem',
    paddingRight: '4rem',
    [theme.breakpoints.up('sm')]: {
      width: 'unset'
    }
  },
  arrow: {
    pointerEvents: 'all',
    marginLeft: -theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

function ArrowButton({ children, secondary, ...props }) {
  const classes = useStyles({ secondary, ...props });

  return (
    <Grid item sm={12} container alignItems="center" className={classes.root}>
      <Button
        variant="outlined"
        className={classes.button}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
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
  secondary: PropTypes.bool
};

ArrowButton.defaultProps = {
  secondary: false
};

export default ArrowButton;
