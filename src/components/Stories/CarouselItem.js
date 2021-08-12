import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InsightCard from "@/pesayetu/components/InsightCard";

function CarouselItem({ items, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Grid container className={classes.carouselItem}>
      {items.map((item) => (
        <Grid key={item.title} item xs={12} md={6} lg={4}>
          <InsightCard
            {...item}
            classes={{
              cardMedia: classes.cardMedia,
              story: classes.story,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

CarouselItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

CarouselItem.defaultProps = {
  items: undefined,
};

export default CarouselItem;
