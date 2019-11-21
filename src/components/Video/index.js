import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrow from '@material-ui/icons/PlayArrow';

import PlayerModal from './PlayerModal';

import useToggleModal from '../../useToggleModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  modal: {}
}));

function Video() {
  const classes = useStyles();
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
          Using PesaYetu
        </Typography>
        <Grid item xs={8} sm={4} style={{ paddingTop: '1rem' }}>
          <Typography variant="caption" className={classes.caption}>
            Watch how you can get the most out of PesaYetu.
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
      <PlayerModal open={open} onEscapeKeyDown={toggleModal} />
    </Grid>
  );
}

export default Video;
