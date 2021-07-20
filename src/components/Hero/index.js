import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import heroBg from '@/pesayetu/assets/images/hero.png';
import Search from '@/pesayetu/components/Search';
import Section from '@/pesayetu/components/Section';

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  backgroundWrap: {
    position: 'fixed',
    zIndex: -1,
    height: typography.pxToRem(468),
    width: '100vw',
    [breakpoints.up('md')]: {
      height: typography.pxToRem(456),
    },
    [breakpoints.up('lg')]: {
      height: typography.pxToRem(600),
    },
  },
  comment: {
    fontSize: typography.pxToRem(11),
    color: '#707070',
    marginTop: typography.pxToRem(20),
    [breakpoints.up('lg')]: {
      marginTop: typography.pxToRem(40),
    },
  },
  section: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(46)} 0 ${typography.pxToRem(22)}`,
    },
    [breakpoints.up('lg')]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
  },
  slabel: {
    marginBottom: typography.pxToRem(10),
  },
  tagline: {
    margin: `${typography.pxToRem(20)} 0`,
    [breakpoints.up('lg')]: {
      margin: `${typography.pxToRem(40)} 0`,
    },
  },
  title: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(46)} 0 ${typography.pxToRem(22)}`,
    },
    [breakpoints.up('lg')]: {
      maxWidth: typography.pxToRem(480),
    },
  },
}));

function Hero({ comment, searchLabel, title, tagline, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.backgroundWrap}>
        <Image src={heroBg} layout="fill" />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            {tagline && (
              <Typography variant="subtitle1" className={classes.tagline}>
                {tagline}
              </Typography>
            )}
            {searchLabel && (
              <Typography variant="subtitle1" className={classes.slabel}>
                {searchLabel}
              </Typography>
            )}
            <Search href="/explore/" />
            <Hidden smDown implementation="css">
              {comment && (
                <Typography variant="subtitle1" className={classes.comment}>
                  {comment}
                </Typography>
              )}
            </Hidden>
          </Grid>
          <Hidden smDown implementation="css">
            <Grid item md={5} />
          </Hidden>
        </Grid>
      </Section>
    </div>
  );
}

Hero.propTypes = {
  comment: PropTypes.string,
  searchLabel: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

Hero.defaultProps = {
  comment: undefined,
  searchLabel: undefined,
  tagline: undefined,
  title: undefined,
};

export default Hero;
