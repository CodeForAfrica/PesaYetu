import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Content from "@/pesayetu/components/InsightCard/Content";

function FeaturedStoryCard({ variant, ...props }) {
  const classes = useStyles(props);
  const titleVariant = variant === "news" ? "h4" : "h3";
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={7}>
        <Card
          {...props}
          variant={variant}
          classes={{ root: classes.card, cardMedia: classes.media }}
        />
      </Grid>
      <Grid item xs={12} md={5} className={classes.content}>
        <Content
          {...props}
          variant={titleVariant}
          classes={{
            cardTitle: classes.title,
            cardDescription: classes.description,
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
};
FeaturedStoryCard.defaultProps = {
  description: undefined,
  title: undefined,
  image: undefined,
  href: undefined,
  ctaText: undefined,
  chart: undefined,
  variant: "news",
};
export default FeaturedStoryCard;
