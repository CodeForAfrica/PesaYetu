import React from 'react';

import useStyles from './useStyles';

const DataIndicators = (props) => {
  const classes = useStyles(props);

  return <div className={classes.root}>Data Indicators</div>;
};

export default DataIndicators;
