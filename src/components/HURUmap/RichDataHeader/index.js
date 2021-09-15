import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import Print from "@/pesayetu/assets/icons/print.svg";

const RichDataHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Typography variant="h3" className={classes.title}>
          Isiolo
        </Typography>
        <div className={classes.image}>
          <Image src={Print} layout="fill" />
        </div>
      </Grid>
      <Typography className={classes.description}>A COUNTY IN KENYA</Typography>
      <hr className={classes.underline} />
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
      <hr className={classes.underline} />
    </div>
  );
};

export default RichDataHeader;
