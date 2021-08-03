import PropTypes from "prop-types";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

const InsightCard = ({
  title,
  description,
  image,
  href,
  linkdescription,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <Card classes={{ root: classes.card }} image={image} href={href}>
      <Content
        title={title}
        description={description}
        linkdescription={linkdescription}
      />
    </Card>
  );
};

InsightCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  linkdescription: PropTypes.string,
};

InsightCard.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
  linkdescription: undefined,
};

export default InsightCard;
