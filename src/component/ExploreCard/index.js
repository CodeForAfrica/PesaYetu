import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const ExploreCard = ({ item, ...props }) => {
  const classes = useStyles(props);
  const { title, description, image } = item;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.image} image={image} />
      </Card>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
      </CardContent>
    </div>
  );
};

ExploreCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

ExploreCard.defaultProps = {
  item: undefined,
};

export default ExploreCard;
