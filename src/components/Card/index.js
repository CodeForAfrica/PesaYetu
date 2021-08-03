import {
  CardActionArea,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Card = ({ href, content, image, ...props }) => {
  const classes = useStyles(props);

  return (
    <MuiCard className={classes.root}>
      {href ? (
        <CardActionArea
          component={href ? Link : undefined}
          href={href}
          underline="none"
          {...props}
        >
          {image && (
            <div className={classes.cardMedia}>
              <Image src={image} layout="fill" className={classes.image} />
            </div>
          )}
          <CardContent className={classes.content}>{content}</CardContent>
        </CardActionArea>
      ) : (
        <CardContent className={classes.content}>
          {image && (
            <div className={classes.cardMedia}>
              <Image src={image} layout="fill" className={classes.image} />
            </div>
          )}
          {content}
        </CardContent>
      )}
    </MuiCard>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.node.isRequired,
};

Card.defaultProps = {
  href: undefined,
  image: undefined,
};

export default Card;
