import { Card, CardContent, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import DataVisualOne from "@/pesayetu/assets/images/DataVisualOne.png";

const DataVisualCard = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <div className={classes.cardMedia}>
        <Image src={DataVisualOne} layout="fill" className={classes.image} />
      </div>
      <CardContent className={classes.content}>
        <Typography display="inline" className={classes.orderText}>
          Step 1:{" "}
        </Typography>
        <Typography display="inline">
          Browse the charts and download and share the data using the buttons on
          the right side.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DataVisualCard;
