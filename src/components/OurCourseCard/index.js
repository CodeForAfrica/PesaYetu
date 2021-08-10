import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Link from "@/pesayetu/components/Link";

const OurCourseCard = ({
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
      classes={{ root: classes.card, cardMedia: classes.cardMedia }}
      image={image}
      href={href}
    >
      {title && (
        <Typography variant="h4" className={classes.cardTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" className={classes.cardDescription}>
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

OurCourseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  linkdescription: PropTypes.string,
};

OurCourseCard.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
  linkdescription: undefined,
};

export default OurCourseCard;
