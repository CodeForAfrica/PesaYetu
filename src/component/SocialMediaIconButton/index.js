import { Grid, IconButton, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ReactComponent as Facebook } from '@/pesayetu/assets/footer-social-fb.svg';
import { ReactComponent as Twitter } from '@/pesayetu/assets/footer-social-tw.svg';

const useStyles = makeStyles(() => ({
  root: {},
  button: {
    background: '#EBEBEB 0% 0% no-repeat padding-box',
    borderRadius: '60px',
    margin: '0.2rem',
    '&:hover': {
      background: '#EBEBEB 0% 0% no-repeat padding-box',
      borderRadius: '60px',
    },
  },
  toolbar: {
    display: 'block',
  },
}));

function SocialMediaIcons({ ...props }) {
  const classes = useStyles(props);
  return (
    <Grid item>
      <IconButton
        size="medium"
        aria-label="twitter"
        edge="center"
        className={classes.button}
      >
        <SvgIcon component={Twitter} />
      </IconButton>
      <IconButton
        size="medium"
        aria-label="facebook"
        edge="center"
        className={classes.button}
      >
        <SvgIcon component={Facebook} />
      </IconButton>
    </Grid>
  );
}

export default SocialMediaIcons;
