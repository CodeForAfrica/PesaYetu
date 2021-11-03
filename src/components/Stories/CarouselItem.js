import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

function CarouselItem({ items, variant, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Grid container className={classes.carouselItem}>
      {items.map((item) => (
        <Grid key={item.slug} item xs={12} md={6} lg={4}>
          <Card
            key={item.slug}
            {...item}
            imageProps={item.imageProps}
            classes={{
              media: clsx({ [classes.shadow]: variant === "embed" }),
            }}
            className={classes.story}
          />
        </Grid>
      ))}
    </Grid>
  );
}

CarouselItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
    })
  ),
  variant: PropTypes.string,
};

CarouselItem.defaultProps = {
  items: undefined,
  variant: undefined,
};

export default CarouselItem;
