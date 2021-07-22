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

const socialMediaLinks = [
  {
    href: '/',
    component: Twitter,
    label: 'twitter',
  },
  {
    href: '/',
    component: Facebook,
    label: 'facebook',
  },
];

function SocialMediaIcons({ ...props }) {
  const classes = useStyles(props);
  return (
    <Grid item>
      {socialMediaLinks.map(({ label, component }) => (
        <IconButton
          key={label}
          size="medium"
          aria-label={label}
          className={classes.button}
        >
          <SvgIcon component={component} />
        </IconButton>
      ))}
    </Grid>
  );
}

export default SocialMediaIcons;
