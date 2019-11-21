import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import A from '@codeforafrica/hurumap-ui/core/A';

import cfa from '../assets/images/logos/codeforafrica.png';
import icfj from '../assets/images/logos/icfj.png';
import bmgf from '../assets/images/logos/bmgf.png';
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
          <A href="https://icfj.org/">
            <img src={icfj} alt="ICFJ" className={classes.img} />
          </A>
        </Grid>
        <Grid item className={classes.imageGrid}>
          <A href="https://gatesfoundation.org/">
            <img
              src={bmgf}
              alt="Bill Melinda Gates Foundation"
              className={classes.img}
            />
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
