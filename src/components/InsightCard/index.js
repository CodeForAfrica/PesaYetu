import { Card, CardContent, Typography } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const InsightCard = ({ title, description, image, href, ...props }) => {
  const { link, text } = href;
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      <div className={classes.cardMedia}>
        <Image src={image} layout="fill" className={classes.image} />
      </div>
      <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography className={classes.cardDescription}>
          {description}
        </Typography>
        <Link className={classes.link} href={link}>
          <Typography className={classes.linkText}>{text}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

InsightCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.objectOf(PropTypes.any),
    })
  ),
};

InsightCard.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
};

export default InsightCard;
