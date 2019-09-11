import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import A from '../A';

const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30.2625rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      width: '40.35rem' // 644px / 16
    }
  },
  title: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    opacity: '0.6'
  },
  body: {
    color: theme.palette.primary.light,
    opacity: '0.6',
    paddingTop: theme.spacing(3)
  },
  listText: {
    color: theme.palette.primary.light,
    opacity: '0.6'
  },
  links: {
    color: theme.palette.primary.light
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '0'
  },
  joinText: {
    paddingTop: theme.spacing(3),
    color: theme.palette.primary.light,
    opacity: '0.6'
  }
});

function About({ classes }) {
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        HURUmap gives infomediaries like journalists and Civic activists an easy
        &apos;plug & play&apos; toolkit for finding and embedding interactive
        data visualizations into their storytelling
      </Typography>
      <Typography variant="subtitle1" className={classes.body}>
        This project is built on software originally created by the Knight Lab
        in the USA for the{' '}
        <A href="https://censusreporter.org/" className={classes.links}>
          CensusReporter.org
        </A>{' '}
        project which has been repurposed by{' '}
        <A href="https://openup.org.za/" className={classes.links}>
          OpenUp
        </A>{' '}
        and Media Monitoring Africa for Wazimap in South Africa for Wazimap in
        South Africa and by{' '}
        <A href="https://codeforafrica.org/" className={classes.links}>
          Code for Africa
        </A>{' '}
        for HURUmap in{' '}
        <A href="https://kenya.hurumap.org/" className={classes.links}>
          Kenya
        </A>
        ,{' '}
        <A href="https://tanzania.hurumap.org/" className={classes.links}>
          Tanzania
        </A>
        ,{' '}
        <A href="https://uganda.hurumap.org/" className={classes.links}>
          Uganda
        </A>
        ,{' '}
        <A href="https://zimbabwe.hurumap.org/" className={classes.links}>
          Zimbabwe
        </A>
        , {' and '}
        <A href="https://zambia.hurumap.org/" className={classes.links}>
          Zambia
        </A>
      </Typography>
      <Typography variant="subtitle1" className={classes.body}>
        This site is an{' '}
        <A href="https://openafrica.net/" className={classes.links}>
          openAFRICA
        </A>{' '}
        project of{' '}
        <A href="https://codeforafrica.org/" className={classes.links}>
          Code for Africa
        </A>
        . All content is released under a{' '}
        <A
          href="https://creativecommons.org/licenses/by/4.0/"
          className={classes.links}
        >
          Creative Commons 4 Attribution Licence
        </A>
        . Reuse it to help empower your own community. The code os available on{' '}
        <A href="https://github.com/CodeForAfrica" className={classes.links}>
          Github
        </A>{' '}
        and data is available on{' '}
        <A href="https://openafrica.net/" className={classes.links}>
          openAFRICA
        </A>
        .
      </Typography>
    </div>
  );
}
About.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(About);
