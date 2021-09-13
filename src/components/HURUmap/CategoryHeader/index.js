import { Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

const CategoryHeader = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2" className={classes.description}>
        Population, Political, Land Use Type, Agriculture, Industries & Trade,
        Health Access, Education And Literacy
      </Typography>
    </div>
  );
};

export default CategoryHeader;
