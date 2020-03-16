import React from 'react';
import { PropTypes } from 'prop-types';

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

import A from '@hurumap-ui/core/A';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '1.25rem 0'
  },
  preview: {
    width: 'available',
    backgroundColor: '#7b7f7b',
    height: '6.125rem',
    [theme.breakpoints.up('md')]: {
      width: '7rem'
    }
  },
  description: {
    opacity: 0.6,
    marginTop: '0.625rem'
  },
  xsTitle: {
    marginTop: '1rem',
    textTransform: 'capitalize',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mdTitle: {
    display: 'none',
    textTransform: 'capitalize',
    [theme.breakpoints.up('md')]: {
      marginTop: '1rem',
      display: 'block'
    }
  },
  orgLink: {
    opacity: 0.6
  }
}));

function Data({
  organization,
  dataLink,
  title,
  description,
  preview,
  ...props
}) {
  const classes = useStyles(props);
  const orgLink = `https://openafrica.net/organization/${organization.name}`;

  return (
    <Card className={classes.root}>
      <CardContent>
        <A className={classes.orgLink} href={orgLink} underline="hover">
          {organization.title}
        </A>
        <CardActionArea target="_blank" href={dataLink}>
          <Typography variant="h5" className={classes.xsTitle}>
            {title}
          </Typography>
          <Grid container direction="row">
            {preview && (
              <Grid item xs={12} md={2}>
                <div className={classes.preview}>{preview}</div>
              </Grid>
            )}
            <Grid item xs={12} md={10}>
              <Typography variant="h5" className={classes.mdTitle}>
                {title}
              </Typography>
              <Typography variant="body2" className={classes.description}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

Data.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  organization: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  dataLink: PropTypes.string.isRequired,
  preview: PropTypes.element
};

Data.defaultProps = {
  preview: null
};

export default Data;
