import { Typography, Grid } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import Group4658 from "@/pesayetu/assets/icons/Group 4658-white.svg";

const CategoryHeader = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <div className={classes.image}>
          <Image src={Group4658} layout="fill" />
        </div>
        <Typography variant="h3" className={classes.heading}>
          Overview
        </Typography>
      </Grid>
      <Typography variant="body2" className={classes.description}>
        Population, Political, Land Use Type, Agriculture, Industries & Trade,
        Health Access, Education And Literacy
      </Typography>
    </div>
  );
};

export default CategoryHeader;
