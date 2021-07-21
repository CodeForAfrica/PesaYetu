import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({ typography }) => ({
  root: {
    padding: `${typography.pxToRem(9.25)} 0`,
  },
}));

function MenuNavigation({ links, ...props }) {
  const classes = useStyles(props);
  const allMenulinks = links.map(({ menuLinks }) => menuLinks);
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItem="center"
      className={classes.root}
    >
      {links?.map(({ href, label }) => (
        <Grid item key={label}>
          <Button color="primary" variant="contained" size="large" href={href}>
            {label}
          </Button>
        </Grid>
      ))}
      {allMenulinks[0]?.map(({ href, label }) => (
        <Grid item key={label}>
          <Button color="default" variant="text" size="large" href={href}>
            {label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

MenuNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default MenuNavigation;
