import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Content from "@/pesayetu/components/Card/Content";

function FeaturedStoryCard({
  chart,
  ctaText,
  description,
  href,
  image,
  imagePlaceholder,
  title,
  variant,
  ...props
}) {
  const classes = useStyles(props);
  const titleVariant = variant === "embed" ? "h3" : "h4";
  const mediaProps = { chart, image, href };
  const contentProps = {
    ctaText,
    description,
    href,
    title,
    titleProps: { variant: titleVariant },
  };

  return (
    <Grid container justifyContent="space-between" className={classes.root}>
      <Grid item xs={12} lg={7}>
        <Card
          {...mediaProps}
          imageProps={imagePlaceholder}
          variant={variant}
          classes={{
            root: classes.card,
            media: classes.media,
            mediaImage: classes.mediaImage,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={4} className={classes.content}>
        <Content
          {...contentProps}
          classes={{
            description: classes.description,
            title: classes.title,
          }}
        />
      </Grid>
    </Grid>
  );
}

FeaturedStoryCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
  chart: PropTypes.string,
  variant: PropTypes.oneOf(["insights", "news"]),
  imagePlaceholder: PropTypes.shape({}),
};
FeaturedStoryCard.defaultProps = {
  description: undefined,
  title: undefined,
  image: undefined,
  href: undefined,
  ctaText: undefined,
  chart: undefined,
  variant: "news",
  imagePlaceholder: undefined,
};
export default FeaturedStoryCard;
