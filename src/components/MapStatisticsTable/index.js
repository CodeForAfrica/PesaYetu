import { Typography, Grid, Paper } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

function MapStatisticsTable({ ...props }) {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        className={classes.locationTags}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            This is where the tag goes
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.locationInfo}>
        <Grid item xs={4}>
          <Typography variant="body1" className={classes.title}>
            label one
          </Typography>
          <Typography variant="body2" className={classes.title}>
            stats one
          </Typography>
        </Grid>

        <Grid item xs={4} className={classes.middleItem}>
          <Typography variant="body1" className={classes.title}>
            label two
          </Typography>
          <Typography variant="body2" className={classes.title}>
            stats two
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" className={classes.title}>
            label three
          </Typography>
          <Typography variant="body2" className={classes.title}>
            stats three
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MapStatisticsTable;
