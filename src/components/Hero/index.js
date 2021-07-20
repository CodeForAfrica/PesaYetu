import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import heroBg from '@/pesayetu/assets/images/hero.png';
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
  section: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up('md')]: {
      padding: `${typography.pxToRem(46)} 0 ${typography.pxToRem(22)}`,
    },
    [breakpoints.up('lg')]: {
      padding: `${typography.pxToRem(40)} 0`,
    },
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
      maxWidth: typography.pxToRem(503),
    },
  },
}));

function Hero({ title, tagline, ...props }) {
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
          </Grid>
          <Hidden mdDown implementation="css">
            <Grid item md={5} />
          </Hidden>
        </Grid>
      </Section>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

Hero.defaultProps = {
  title: undefined,
  tagline: undefined,
};

export default Hero;
