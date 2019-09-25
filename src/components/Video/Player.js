import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import IFrame from '../IFrame';
import Sources from './Sources';
import Thumbnail from './Thumbnail';

import useToggleModal from '../../useToggleModal';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '-1.875rem 0',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 6.25em)'
    }
  },
  videoPlayer: {
    width: '100vw',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      width: '60vw'
    }
  },
  videoPlaylist: {
    width: '100vw',
    overflow: 'scroll',
    height: '85vw',
    scrollbarWidth: 'none', // Firefox
    '-ms-overflow-style': 'none', // IE
    [theme.breakpoints.up('md')]: {
      margin: '0 1.25rem',
      width: '12vw',
      height: '33.7vw'
    },
    '&::-webkit-scrollbar': {
      // Chrome + Safari
      width: 0,
      height: 0,
      background: 'transparent'
    }
  },
  thumbnail: {
    height: 200
  },
  closeButton: {
    padding: 0,
    position: 'absolute',
    right: '1.25rem',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      marginLeft: '2.5rem'
    }
  }
});

function Player({ classes }) {
  const [videoId, setVideoId] = useState((Sources[0] && Sources[0].id) || null);
  const { toggleModal } = useToggleModal('video');

  const handleThumbnailClick = id => {
    if (id) {
      setVideoId(id);
    }
  };
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        justify="center"
        style={{
          marginTop: '2.5rem'
        }}
      >
        <Grid item>
          <div className={classes.videoPlayer}>
            <IFrame
              title="PesaYetu"
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Grid>

        <Grid item>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.videoPlaylist}
          >
            {Sources.map(source => (
              <Grid key={source.id} item>
                <Thumbnail
                  videoId={source.id}
                  videoTitle={source.title}
                  className={classes.thumbnail}
                  onClick={handleThumbnailClick}
                  isSelected={source.id === videoId}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid constainer item justify="flex-end" alignItems="flex-start">
          <IconButton
            className={classes.closeButton}
            aria-label="Close"
            onClick={toggleModal}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

Player.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Player);
