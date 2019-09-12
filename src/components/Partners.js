import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { A } from '@codeforafrica/hurumap-ui';

import cfa from '../assets/images/logos/codeforafrica.png';
import pulitzercenter from '../assets/images/logos/pulitzer.png';
import ancir from '../assets/images/logos/ancir.png';
import africadrone from '../assets/images/logos/africa-drone.png';
import pesacheck from '../assets/images/logos/pesacheckwhite.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.light
  },
  layout: {
    height: '14rem',
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem',
      margin: '0 auto',
      height: '11.423rem'
    }
  },

  // 6 rem image + 4 rem padding = 10rem = 160px
  img: {
    maxHeight: '4.288rem',
    maxWidth: '30vw',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      maxWidth: '11.423rem'
    }
  },
  imageGrid: {
    padding: '1.143remrem',
    [theme.breakpoints.up('md')]: {
      padding: '2.286rem 1.143rem'
    }
  }
});

function Partners({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid
        container
        className={classes.layout}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.imageGrid}>
          <A href="https://codeforafrica.org/">
            <img src={cfa} alt="Code for Africa" className={classes.img} />
          </A>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <A href="https://pulitzercenter.org/">
            <img
              src={pulitzercenter}
              alt="Pulitzer Center"
              className={classes.img}
            />
          </A>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <A href="https://investigativecenters.org/">
            <img src={ancir} alt="ANCIR" className={classes.img} />
          </A>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <A href="https://africandrone.org/">
            <img src={africadrone} alt="Africa Drone" className={classes.img} />
          </A>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <A href="https://pesacheck.org/">
            <img src={pesacheck} alt="PesaCheck" className={classes.img} />
          </A>
        </Grid>
      </Grid>
    </Grid>
  );
}

Partners.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Partners);
