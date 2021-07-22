import React from 'react';

import useStyles from './useStyles';

const InsightCard = (props) => {
  const classes = useStyles(props);
  return <div className={classes.root}>Insight card</div>;
};

export default InsightCard;
