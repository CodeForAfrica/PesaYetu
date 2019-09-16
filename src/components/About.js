import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    width: 'auto',
    padding: '1.43rem 2.143rem 0',
    [theme.breakpoints.up('md')]: {
      padding: 0
    }
  },
  layout: {
    padding: '60px 0',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '66.59rem' // .75 of lg
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  imgGrid: {
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      alignItems: 'flex-end'
    }
  },
  info: {
    flexGrow: 1,
    padding: '20px 30px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '21.875rem',
      paddingTop: 0,
      paddingLeft: '1rem',
      paddingRight: '2rem',
      marginLeft: '-2.3rem'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '30rem',
      padding: 0
    }
  },
  infoTitle: {
    marginBottom: '1.5rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '3rem'
    }
  },
  infoBody: {
    marginTop: '1rem'
  }
}));

function About({ about: { heading, intro, body }, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.layout} spacing={4}>
        <Grid item md={4}>
          <div className={classes.heading}>
            <Typography variant="h2">{heading}</Typography>
          </div>
        </Grid>
        <Grid item md={4}>
          <Grid className={classes.info}>
            <Typography
              component="div"
              variant="body2"
              className={classes.infoTitle}
            >
              {intro}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className={classes.infoBody}
            >
              {body}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item md={4} className={classes.imgGrid}>
          {null}
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default About;
