import { Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './useStyles';

import GroupImage from '@/pesayetu/assets/Group 3973.png';

const ExploreCard = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.image} image={GroupImage} />
      </Card>
      <Typography className={classes.title} variant="h4">
        Promise Tracker
      </Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam
        nam lectus lobortis varius ultrices, donec dapibus dui felis est
        penatibus.
      </Typography>
    </div>
  );
};

export default ExploreCard;
