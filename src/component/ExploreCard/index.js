import { Card, CardMedia } from '@material-ui/core';
import React from 'react';

import useStyles from './useStyles';

import GroupImage from '@/pesayetu/assets/Group 3973.png';

const ExploreCard = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia image={GroupImage} />
      </Card>
    </div>
  );
};

export default ExploreCard;
