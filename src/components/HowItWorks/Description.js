import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import PlayerModal from '../Video/PlayerModal';
import Steps from './Steps';
import ViewVideos from './ViewVideos';
import useToggleModal from '../../useToggleModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    padding: '1.143rem 0'
  },
  steps: {
    paddingTop: '0.6423rem' // 9px / 14
  },
  viewVideos: {
    marginTop: '2.143rem',
    marginBottom: '4.4286rem', // 62px / 14
    [theme.breakpoints.up('md')]: {
      marginTop: '6.7143rem'
    }
  }
}));

function Description({ ...props }) {
  const classes = useStyles(props);
  const { open, toggleModal } = useToggleModal('video');
  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        How <br />
        it works
      </Typography>

      <Steps />
      <div className={classes.viewVideos}>
        <ViewVideos onClick={toggleModal} />

        <PlayerModal open={open} toggleModal={toggleModal} />
      </div>
    </div>
  );
}

export default Description;
