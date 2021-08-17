import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";

function CarouselItem({ items, activeCategory, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Grid container className={classes.carouselItem}>
      {items.map((item) => (
        <Grid key={item.slug} item xs={12} md={6} lg={4}>
          <InsightCard
            key={item.slug}
            {...item}
            variant={activeCategory}
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
  activeCategory: PropTypes.string,
};

CarouselItem.defaultProps = {
  items: undefined,
  activeCategory: undefined,
};

export default CarouselItem;
