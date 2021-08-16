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

const Card = ({ href, children, image, ...props }) => {
  const classes = useStyles(props);

  return (
    <MuiCard classes={{ root: classes.root }}>
      {href ? (
        <CardActionArea
          component={href ? Link : undefined}
          href={href}
          underline="none"
          {...props}
        >
          <CardContent classes={{ root: classes.content }}>
            {image && (
              <div className={classes.cardMedia}>
                <Image src={image} layout="fill" className={classes.image} />
              </div>
            )}
            {children}
          </CardContent>
        </CardActionArea>
      ) : (
        <CardContent classes={{ root: classes.content }}>
          {image && (
            <div className={classes.cardMedia}>
              <Image src={image} layout="fill" className={classes.image} />
            </div>
          )}
          {children}
        </CardContent>
      )}
    </MuiCard>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  href: undefined,
  image: undefined,
};

export default Card;
