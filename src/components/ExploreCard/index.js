import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const ExploreCard = ({ title, description, image, ...props }) => {
  const classes = useStyles(props);

  return (
    <Card image={image} classes={{ root: classes.root }} imageMargin="true">
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
    </Card>
  );
};

ExploreCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

ExploreCard.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
};

export default ExploreCard;
