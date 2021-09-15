import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

const RichDataHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Typography variant="h3" className={classes.title}>
          Isiolo
        </Typography>
        <Typography>Print Icon</Typography>
      </Grid>
      <Typography>COUNTY IN KENYA</Typography>
      <hr />
      <Grid container>
        <Typography>pin icon</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="temp-id">Age</InputLabel>
          <Select labelId="temp-id" id="simple-select">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <hr />
    </div>
  );
};

export default RichDataHeader;
