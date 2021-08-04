import { RichTypography } from "@commons-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const DataVisualCard = ({ image, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card classes={{ root: classes.root }} image={image}>
      <RichTypography
        className={classes.content}
        variant="subtitle2"
        display="inline"
      >
        {description}
      </RichTypography>
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
