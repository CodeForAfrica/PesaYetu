import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import InsightsData from "@/pesayetu/components/InsightsData";

function NewsTabStories({
  featuredStoryProps,
  dataInsightDataProps,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <FeaturedStoryCard {...featuredStoryProps} />
      </Grid>
      <Grid item>
        <InsightsData {...dataInsightDataProps} />
      </Grid>
    </Grid>
  );
}
NewsTabStories.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  dataInsightDataProps: PropTypes.shape({}),
};

NewsTabStories.defaultProps = {
  featuredStoryProps: undefined,
  dataInsightDataProps: undefined,
};

export default NewsTabStories;
