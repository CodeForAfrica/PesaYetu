import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const Card = ({ href, children, image, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {href ? (
        <div
          component={href ? Link : undefined}
          href={href}
          underline="none"
          {...props}
        >
          <div className={classes.content}>
            {image && (
              <div className={classes.cardMedia}>
                <Image src={image} layout="fill" className={classes.image} />
              </div>
            )}
            {children}
          </div>
        </div>
      ) : (
        <div className={classes.content}>
          {image && (
            <div className={classes.cardMedia}>
              <Image src={image} layout="fill" className={classes.image} />
            </div>
          )}
          {children}
        </div>
      )}
    </div>
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
