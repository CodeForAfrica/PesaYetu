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
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: '-1',
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
}));

function Hero({ title, tagline, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.backgroundWrap}>
        <Image src={heroBg} layout="fill" objectFit="cover" quality={100} />
      </div>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">{title}</Typography>
            {tagline && <Typography variant="subtitle1">{tagline}</Typography>}
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
