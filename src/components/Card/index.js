import { Card as MuiCard } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import CardActionArea from "./ActionArea";
import CardContent from "./Content";
import CardMedia from "./Media";
import useStyles from "./useStyles";

const Card = ({
  chart,
  children,
  className,
  ctaText,
  description,
  descriptionProps,
  embed,
  href,
  image,
  imageProps,
  linkProps,
  media,
  mediaProps,
  onClick,
  title,
  titleProps,
  variant,
  ...props
}) => {
  const squareMedia = mediaProps?.square;
  const classes = useStyles({ ...props, squareMedia });
  const actionAreaProps = { href, onClick };
  const contentProps = {
    ctaText,
    description,
    descriptionProps,
    href,
    linkProps,
    title,
    titleProps,
  };

  return (
    <MuiCard elevation={0} square className={clsx(classes.root, className)}>
      <CardActionArea
        {...actionAreaProps}
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.actionAreaFocusHighlight,
          focusVisible: classes.actionAreaFocusVisible,
        }}
      >
        <CardMedia
          {...mediaProps}
          chart={chart}
          embed={embed}
          image={image}
          imageProps={imageProps}
          media={media}
          variant={variant}
          classes={{ root: classes.media, image: classes.mediaImage }}
        />
        <CardContent
          {...contentProps}
          classes={{
            root: classes.content,
            description: classes.contentDescription,
            link: classes.contentLink,
            title: classes.contentTitle,
          }}
        />
      </CardActionArea>
    </MuiCard>
  );
};

Card.propTypes = {
  chart: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  description: PropTypes.string,
  descriptionProps: PropTypes.shape({}),
  embed: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  imageProps: PropTypes.shape({}),
  linkProps: PropTypes.shape({}),
  media: PropTypes.string,
  mediaProps: PropTypes.shape({
    square: PropTypes.bool,
  }),
  onClick: PropTypes.func,
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
  variant: PropTypes.oneOf(["image", "embed"]),
};

Card.defaultProps = {
  chart: undefined,
  children: undefined,
  className: undefined,
  ctaText: undefined,
  embed: undefined,
  description: undefined,
  descriptionProps: undefined,
  href: undefined,
  image: undefined,
  imageProps: undefined,
  linkProps: undefined,
  media: undefined,
  mediaProps: undefined,
  onClick: undefined,
  variant: "image",
  title: undefined,
  titleProps: undefined,
};

export default Card;
