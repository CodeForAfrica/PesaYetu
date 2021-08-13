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
  ctaText,
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
      {...props}
    >
      {title && (
        <Typography variant="h4" className={classes.cardTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" className={classes.cardDescription}>
          {description}
        </Typography>
      )}
      {ctaText && href && (
        <Link className={classes.link} href={href}>
          <Typography variant="subtitle2" className={classes.linkText}>
            {ctaText}
          </Typography>
        </Link>
      )}
    </Card>
  );
};

InsightCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
};

InsightCard.defaultProps = {
  className: undefined,
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
  ctaText: undefined,
};

export default InsightCard;
