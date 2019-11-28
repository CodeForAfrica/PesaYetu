import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      width: '11rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '21.45rem'
    }
  },
  title: {
    opacity: '0.6',
    [theme.breakpoints.up('md')]: {
      paddingTop: '1rem'
    }
  },
  button: {
    border: '1px solid black',
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  subtitleGrid: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  contentCount: {
    fontSize: '3.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize
    }
  },
  contentText: {
    paddingTop: '1rem',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      height: '4.76rem',
      width: 'auto'
    }
  },
  link: { textDecoration: 'none' },
  linkText: {
    fontWeight: 'bold',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2.7rem'
    }
  }
}));

function Content({
  children,
  title,
  contentCount,
  contentType,
  description,
  link,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid className={classes.root}>
      <Grid item xs={12}>
        {children}
      </Grid>

      <Grid item xs={12} className={classes.subtitleGrid}>
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h1" className={classes.contentCount}>
          {contentCount}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">{contentType}</Typography>
        <div className={classes.contentText}>
          <Typography variant="body2" className={classes.title}>
            {description}
          </Typography>
        </div>

        <Link href={link} className={classes.link}>
          <Typography variant="subtitle2" className={classes.linkText}>
            View {contentType}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired,
  contentCount: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Content;
