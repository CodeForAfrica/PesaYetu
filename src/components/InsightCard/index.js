import { Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Link from "@/pesayetu/components/Link";

const InsightCard = ({
  className,
  title,
  description,
  image,
  href,
  linkdescription,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <Card
      classes={{
        root: clsx(classes.root, classes.card, className),
        cardMedia: classes.cardMedia,
      }}
      image={image}
      href={href}
    >
      {title && (
        <Typography variant="h5" className={classes.cardTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" className={classes.cardDescription}>
          {description}
        </Typography>
      )}
      <Link className={classes.link} href={href}>
        {linkdescription && (
          <Typography variant="subtitle2" className={classes.linkText}>
            {linkdescription}
          </Typography>
        )}
      </Link>
    </Card>
  );
};

InsightCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  linkdescription: PropTypes.string,
};

InsightCard.defaultProps = {
  className: undefined,
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
  linkdescription: undefined,
};

export default InsightCard;
