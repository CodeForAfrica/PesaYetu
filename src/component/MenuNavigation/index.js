import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: `${typography.pxToRem(9.25)} 0`,
  },
}));

const menuButtons = [
  {
    href: 'https://dev.pesayetu.pesacheck.org',
    label: 'EXPLORE',
    menuLinks: [
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'DATA',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'STORIES',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'HOW IT WORKS',
      },
    ],
  },
];
const allMenuLinks = menuButtons.map((item) => item.menuLinks);
// eslint-disable-next-line no-console
console.log(allMenuLinks[0]);

function MenuNavigation({ ...props }) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      item
      xs={8}
      direction="row"
      justify="flex-start"
      alignItem="center"
      className={classes.root}
    >
      {menuButtons.map((item) => (
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href={item.href}
          >
            {item.label}
          </Button>
        </Grid>
      ))}

      {allMenuLinks[0].map((item) => (
        <Grid item>
          <Button color="default" variant="text" size="large" href={item.href}>
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default MenuNavigation;
