import { Typography, LinearProgress } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

const Metric = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3">11%</Typography>
        <div className={classes.description}>
          <Typography variant="caption">Voter registration %</Typography>
        </div>
        <LinearProgress
          className={classes.progressBar}
          value={10}
          color="primary"
          variant="buffer"
        />
      </div>
      <Typography variant="caption" className={classes.bottomDescription}>
        10.1% National Average
      </Typography>
    </>
  );
};

export default Metric;
