import React from 'react';

import { PropTypes } from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      padding: '5rem 0'
    }
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem',
      margin: '0 auto'
    }
  },
  light: {
    backgroundColor: theme.palette.primary.light
  },
  gridMargin: {
    marginBottom: '1.4286rem'
  }
});

function Section({ id, classes, light, title, subtitle, children }) {
  return (
    <div
      id={id}
      className={classNames(classes.root, { [classes.light]: light })}
    >
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} md={4} className={classes.gridMargin}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  light: PropTypes.bool,
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Section.defaultProps = {
  id: undefined,
  light: false,
  children: null
};

export default withStyles(styles)(Section);
