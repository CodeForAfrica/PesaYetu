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

const useStyles = makeStyles(() => ({
  root: {
    width: 'available'
  },
  preview: {
    width: 'available',
    backgroundColor: '#7b7f7b',
    height: '8.0625rem',
    border: '1px solid #7b7f7b',
    overflow: 'hidden'
  },
  content: {
    padding: '0.625rem 0'
  },
  title: {},
  description: {
    marginTop: '0.625rem',
    opacity: 0.6
  }
}));

function Document({ link, title, description, preview, ...props }) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardActionArea target="_blank" href={link}>
        <CardContent className={classes.content}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={4}>
              <div className={classes.preview}>{preview}</div>
            </Grid>

            <Grid item xs={8} container direction="column" justify="center">
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="body2" className={classes.description}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Document.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.element
};

Document.defaultProps = {
  preview: null
};

export default Document;
