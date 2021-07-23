import { Grid, IconButton, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ReactComponent as Facebook } from '@/pesayetu/assets/footer-social-fb.svg';
import { ReactComponent as Twitter } from '@/pesayetu/assets/footer-social-tw.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    paddingTop: '2rem',
    [breakpoints.up('lg')]: {
      paddingTop: '0.5rem',
    },
  },
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
  svgIcon: {
    padding: '0.2rem',
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
  const viewBoxValue = '0 0 48 48';
  return (
    <Grid item className={classes.root}>
      {socialMediaLinks.map(({ label, component }) => (
        <IconButton
          key={label}
          size="medium"
          aria-label={label}
          viewBox={viewBoxValue}
          className={classes.button}
        >
          <SvgIcon
            component={component}
            classes={{
              root: classes.svgIcon,
            }}
          />
        </IconButton>
      ))}
    </Grid>
  );
}

export default SocialMediaIcons;
