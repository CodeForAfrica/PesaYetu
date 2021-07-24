import { Grid, IconButton, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ReactComponent as Facebook } from '@/pesayetu/assets/footer-social-fb.svg';
import { ReactComponent as Twitter } from '@/pesayetu/assets/footer-social-tw.svg';

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(32),
    [breakpoints.up('lg')]: {
      paddingTop: typography.pxToRem(8),
    },
  },
  button: {
    background: '#EBEBEB',
    borderRadius: typography.pxToRem(3.75),
    margin: typography.pxToRem(3.2),
    '&:hover': {
      background: '#EBEBEB',
      borderRadius: typography.pxToRem(3.75),
    },
  },
  toolbar: {
    display: 'block',
  },
  svgIcon: {
    padding: typography.pxToRem(3.2),
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
