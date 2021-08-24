import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const InsightCard = ({ className, titleVariant, ...props }) => {
  const classes = useStyles(props);

  return (
    <Card
      classes={{
        root: clsx(classes.root, classes.card, className),
        cardMedia: classes.cardMedia,
      }}
      {...props}
    >
      <Content {...props} variant={titleVariant} />
    </Card>
  );
};

InsightCard.propTypes = {
  className: PropTypes.string,
  titleVariant: PropTypes.string,
};

InsightCard.defaultProps = {
  className: undefined,
  titleVariant: undefined,
};

export default InsightCard;
