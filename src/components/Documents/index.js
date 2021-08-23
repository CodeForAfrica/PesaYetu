import { Grid, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

function Documents({ ...props }) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid container direction="row" justifyContent="flex-start" item xs={8}>
        <Typography variant="body1">this is item one</Typography>
        <Typography variant="body1">this is item two</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1">Read more</Typography>
      </Grid>
    </Grid>
  );
}

export default Documents;
