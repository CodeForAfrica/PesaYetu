import PropTypes from "prop-types";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const ExploreCard = ({ item, ...props }) => {
  const classes = useStyles(props);

  const { image } = item;

  return (
    <Card image={image} classes={{ root: classes.root }}>
      <Content {...item} />
    </Card>
  );
};

ExploreCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

ExploreCard.defaultProps = {
  item: undefined,
};

export default ExploreCard;
