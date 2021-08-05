import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const ExploreCard = ({ item, ...props }) => {
  const classes = useStyles(props);
  const { title, description, image } = item;

  return (
    <Card
      image={image}
      classes={{ root: classes.root, cardMedia: classes.cardMedia }}
      imageMargin="true"
    >
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
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
