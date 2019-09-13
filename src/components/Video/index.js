import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PlayArrow from '@material-ui/icons/PlayArrow';

import PlayerModal from './PlayerModal';

import background from '../../assets/images/hero-image-1.png';
import useToggleModal from '../../useToggleModal';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '30rem' // 480px / 16
  },
  layout: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '66.59rem' // .75 of lg
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  caption: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.786rem'
  },
  subheading: { color: '#fff' },
  buttonGrid: { paddingTop: '1rem', textAlign: 'center' },
  button: {
    textTransform: 'none',
    fontWeight: 800,
    fontSize: theme.typography.subtitle1.fontSize,
    color: '#fff',
    border: '2px solid white',
    [theme.breakpoints.up('lg')]: {
      height: '6.25rem', // 100px / 16
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  buttonLink: {
    textDecoration: 'none'
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});

function Video({ classes, dominion }) {
  const { open, toggleModal } = useToggleModal('video');
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.layout}
      >
        <Typography variant="h3" className={classes.subheading}>
          Using Dominion
        </Typography>
        <Grid item xs={8} sm={4} style={{ paddingTop: '1rem' }}>
          <Typography variant="caption" className={classes.caption}>
            Watch how you can get the most out of Dominion.
          </Typography>

          <Grid item className={classes.buttonGrid}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
              onClick={toggleModal}
            >
              <PlayArrow />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <PlayerModal
        dominion={dominion}
        open={open}
        onEscapeKeyDown={toggleModal}
      />
    </Grid>
  );
}

Video.propTypes = {
  classes: PropTypes.shape().isRequired,
  dominion: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Video);
