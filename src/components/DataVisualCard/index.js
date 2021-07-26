import { Card, CardContent, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const DataVisualCard = ({ image, order, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <div className={classes.cardMedia}>
        {image && <Image src={image} layout="fill" className={classes.image} />}
      </div>
      <CardContent className={classes.content}>
        {order && (
          <Typography display="inline" className={classes.orderText}>
            {order}
          </Typography>
        )}
        {description && <Typography display="inline">{description}</Typography>}
      </CardContent>
    </Card>
  );
};

DataVisualCard.propTypes = {
  image: PropTypes.string,
  order: PropTypes.string,
  description: PropTypes.string,
};

DataVisualCard.defaultProps = {
  image: undefined,
  order: undefined,
  description: undefined,
};

export default DataVisualCard;
