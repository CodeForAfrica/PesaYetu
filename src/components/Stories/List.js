import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

function List({ items, variant, ...props }) {
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
            {...props}
            {...item}
            imageProps={item.imageProps}
            classes={{
              media: clsx({ [classes.shadow]: variant === "embed" }),
              mediaImage: classes.mediaImage,
              contentDescription: classes.description,
              contentTitle: classes.title,
            }}
            className={classes.story}
          />
        </Grid>
      ))}
    </Grid>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
    })
  ),
  variant: PropTypes.string,
};

List.defaultProps = {
  items: undefined,
  variant: undefined,
};

export default List;
