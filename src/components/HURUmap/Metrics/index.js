import { Typography, LinearProgress } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

const Metric = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h2">11%</Typography>
        <Typography>Voter registration %</Typography>
        <LinearProgress
          className={classes.progressBar}
          value={10}
          color="primary"
          variant="buffer"
        />
      </div>
      <Typography>10.1% National Average</Typography>
    </>
  );
};

export default Metric;
