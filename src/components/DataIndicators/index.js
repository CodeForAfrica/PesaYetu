import Image from "next/image";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import bg from "@/pesayetu/assets/images/Mask Group 8.png";

const DataIndicators = ({ ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Image objectFit="cover" src={bg} layout="fill" />
      </div>
      <Content {...props} />
    </div>
  );
};

export default DataIndicators;
