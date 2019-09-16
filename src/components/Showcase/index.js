import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import StoryList from './StoryList';

const useStyles = makeStyles(theme => ({
  showCaseContainer: {
    backgroundColor: 'white',
    display: 'inline-block',
    width: '100%'
  },
  root: {
    flexGrow: 1,
    padding: '3.1875rem 1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '3.1875rem 0',
      width: '80%',
      float: 'right'
    }
  },
  headline: {
    width: '100%',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  },
  headlineTitle: {
    textAlign: 'left',
    paddingBottom: '1rem'
  },
  headlineDescription: {
    textAlign: 'left'
  }
}));

function Showcase({ stories }) {
  const classes = useStyles();

  return (
    <div className={classes.showCaseContainer} id="showcase">
      <Grid
        container
        direction="column"
        className={classes.root}
        justify="center"
      >
        <Grid
          item
          xs={12}
          container
          direction="row"
          className={classes.headline}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.headlineTitle}>
              Showcase
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" className={classes.headlineDescription}>
              Explore how land and how it is controlled shapes everything from
              our food security and geopolitics to national identity.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StoryList storyData={stories} />
        </Grid>
      </Grid>
    </div>
  );
}

Showcase.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Showcase;
