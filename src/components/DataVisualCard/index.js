import PropTypes from "prop-types";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const DataVisualCard = ({ image, description, ...props }) => {
  const classes = useStyles(props);
  return (
    <Card classes={{ root: classes.root }} image={image}>
      <Content description={description} />
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
