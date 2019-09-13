import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { A } from '@codeforafrica/hurumap-ui';
import SocialMedia from '../SocialMedia';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    width: '9.75rem', // 156px / 16
    [theme.breakpoints.up('md')]: {
      width: '12.5625rem' // 201px / 16
    }
  },
  listText: {
  },
  links: {
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '0'
  },
  joinText: {
    paddingTop: '1.5rem'
  }
});

function Community({ classes }) {
  return (
    <Grid container className={classes.root} justify="flex-start">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          className={classes.listText}
          component="div"
        >
          A project by:
          <ul className={classes.list}>
            <li>
              <A href="https://codeforafrica.org/" className={classes.links}>
                Code for Africa
              </A>
            </li>
            <li>
              <A href="https://www.icfj.org/" className={classes.links}>
                ICFJ
              </A>
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.joinText}>
          <SocialMedia />
        </div>
      </Grid>
    </Grid>
  );
}
Community.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Community);
