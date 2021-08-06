import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";

function NewsTabStories({ featuredStoryProps, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" className={classes.root}>
      <FeaturedStoryCard {...featuredStoryProps} />
    </Grid>
  );
}
NewsTabStories.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
};

NewsTabStories.defaultProps = {
  featuredStoryProps: undefined,
};

export default NewsTabStories;
