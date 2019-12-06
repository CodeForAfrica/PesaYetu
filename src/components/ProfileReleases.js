import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import A from '@codeforafrica/hurumap-ui/core/A';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#DADBDD',
    padding: '3.125em',
    [theme.breakpoints.up('md')]: {
      padding: '3.125em 0'
    }
  },
  wrapper: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  description: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1
    }
  },
  releaseSelector: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2
    }
  },
  descriptionTitle: {
    lineHeight: 1.43,
    padding: '8px 0'
  },
  descriptionText: {
    lineHeight: 2.22
  },
  link: {},
  changeReleaseButton: {
    lineHeight: 2.09,
    letterSpacing: 'normal',
    textAlign: 'left',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    width: '9.375rem',
    paddingLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: '50px'
    }
  },
  releasesMenuItem: {
    width: '9.375rem',
    maxWidth: '9.375rem'
  }
}));

function ProfileRelease() {
  const classes = useStyles();
  const citationLink = link => (
    <A className={classes.link} href={link}>
      {link}
    </A>
  );

  return (
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Grid item className={classes.description}>
          <Typography className={classes.descriptionTitle}>
            Citations
          </Typography>
          <Typography className={classes.descriptionText}>
            Community Survey 2016: Statistics South Africa (2016) South African
            Community Survey 2016. Indicators derived from the full population
            Community Survey.{' '}
            {citationLink(
              'https://wazimap.co.za/profiles/province-EC-eastern-cape'
            )}
            <br />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileRelease;
