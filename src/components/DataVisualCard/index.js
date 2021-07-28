import { RichTypography } from "@commons-ui/core";
import { Card, CardContent } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const DataVisualCard = ({ image, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <div className={classes.cardMedia}>
        {image && <Image src={image} layout="fill" className={classes.image} />}
      </div>
      <CardContent className={classes.content}>
        {description && (
          <RichTypography variant="subtitle2" display="inline">
            {description}
          </RichTypography>
        )}
      </CardContent>
    </Card>
  );
};

DataVisualCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};

DataVisualCard.defaultProps = {
  image: undefined,
  description: undefined,
};

export default DataVisualCard;
