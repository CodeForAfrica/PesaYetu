import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import SocialMediaIcons from '@/pesayetu/components/SocialMediaIcons';

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    margin: `${typography.pxToRem(20)} 0`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '& > div:nth-of-type(3)': {
      order: 3,
    },
    '& > div:nth-of-type(4)': {
      order: 4,
    },
    '& > div:nth-of-type(5)': {
      order: 2,
    },
    '& > div:nth-of-type(6)': {
      order: 5,
    },
    [breakpoints.up('lg')]: {
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      '& > div:nth-of-type(3)': {
        order: 0,
      },
      '& > div:nth-of-type(4)': {
        order: 0,
      },
      '& > div:nth-of-type(5)': {
        order: 0,
      },
      '& > div:nth-of-type(6)': {
        order: 0,
      },
    },
  },
  links: {
    padding: `${typography.pxToRem(18)} ${typography.pxToRem(28)} `,
  },
  menu: {},
  menuLinks: {
    color: 'white',
    padding: `${typography.pxToRem(20)} 0`,
    '&:hover, &:focus, &:focus-within': {
      backgroundColor: 'transparent',
    },
    [breakpoints.up('lg')]: {
      padding: `${typography.pxToRem(18)}`,
      color: palette.background.dark,
    },
  },
}));

function MenuNavigation({ links, children, ...props }) {
  const classes = useStyles(props);
  const allMenulinks = links.map(({ menuLinks }) => menuLinks);
  return (
    <div className={classes.root}>
      {links?.map(({ href, label }) => (
        <Grid item key={label}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href={href}
            className={classes.links}
          >
            <Typography variant="h6">{label}</Typography>
          </Button>
        </Grid>
      ))}
      {children}
      {allMenulinks[0]?.map(({ href, label }) => (
        <Grid item key={label} className={classes.menu}>
          <Button
            color="default"
            variant="text"
            size="large"
            href={href}
            className={classes.menuLinks}
          >
            <Typography variant="h6">{label}</Typography>
          </Button>
        </Grid>
      ))}
      <SocialMediaIcons />
    </div>
  );
}

MenuNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  children: PropTypes.node,
};

MenuNavigation.defaultProps = {
  children: undefined,
};
export default MenuNavigation;
