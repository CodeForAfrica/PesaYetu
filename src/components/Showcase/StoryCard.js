import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: '20rem',
    height: '100%',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    '&:hover': {
      backgroundColor: '#fff'
    }
  },
  contentRoot: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  cardContent: {
    alignItems: 'flex-end',
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    marginTop: '-100%',
    paddingTop: 0,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    background: 'linear-gradient(to top, black, transparent)'
  },
  cardMedia: {
    minHeight: '20rem',
    height: '100%',
    width: '100%'
  },
  cardLink: {
    textDecoration: 'none'
  },
  overline: {
    color: '#fff'
  },
  bodyTitle: {
    color: '#fff',
    fontWeight: 500,
    marginTop: '1rem'
  },
  bodyText: {
    color: '#fff',
    margin: '1rem 0'
  },
  media: {
    filter: 'sepia(100%) hue-rotate(159deg) brightness(40%) saturate(350%)'
  }
});

function StoryCard({ story, classes }) {
  const {
    virtuals: {
      previewImage: { imageId: mediaSrc }
    },
    createdAt: timestamp,
    title,
    content: { subtitle: brief },
    uniqueSlug: link,
    media = 'img'
  } = story;

  return (
    <Card className={classes.root}>
      <a
        href={`https://pesacheck.org/${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.cardLink}
      >
        <CardActionArea
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexFlow: 'column',
            height: '100%'
          }}
        >
          <CardMedia
            component={media}
            className={classes.cardMedia}
            image={`https://cdn-images-1.medium.com/max/480/${mediaSrc}`}
            classes={{ media: classes.media }}
            title="Story"
          />
          <CardContent className={classes.cardContent}>
            <Grid
              container
              item
              direction="column"
              className={classes.contentRoot}
              alignItems="flex-start"
              style={{ height: '100%' }}
            >
              <Typography variant="subtitle2" className={classes.overline}>
                {new Date(timestamp).toLocaleString('en-GB', {
                  year: 'numeric',
                  day: '2-digit',
                  month: 'short'
                })}
              </Typography>
              <Typography variant="h5" className={classes.bodyTitle}>
                {title}
              </Typography>
              <Typography variant="body2" className={classes.bodyText}>
                {brief}{' '}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

StoryCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  story: PropTypes.shape().isRequired
};

export default withStyles(styles)(StoryCard);
