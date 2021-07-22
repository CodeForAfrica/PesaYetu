import { Card, CardContent, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import CardImg from "@/pesayetu/assets/images/josh-sorenson-unsplash.png";

const InsightCard = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      <div>
        <Image src={CardImg} layout="fill" className={classes.image} />
      </div>
      <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.cardTitle}>
          Dolor sit amet ipsum dolor sit amet
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus
          etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est
          penatibus.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
