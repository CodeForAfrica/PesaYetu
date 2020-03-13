import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Container, Grid, Typography } from '@material-ui/core';

import StoryList from './StoryList';

const useStyles = makeStyles(theme => ({
  showCaseContainer: {
    maxWidth: '81.3571429rem',
    padding: 0
  },
  root: {
    flexGrow: 1,
    padding: '3.1875rem 1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '3.1875rem 0'
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
    <Container className={classes.showCaseContainer} id="showcase">
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
              View and explore how we visualise Kenya’s budget data to show how
              much money each county has received from the national government,
              and how the money is allocated and utilized based on each county’s
              priorities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StoryList stories={stories} />
        </Grid>
      </Grid>
    </Container>
  );
}

Showcase.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Showcase;
