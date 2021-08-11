import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import NewsGrid from "@/pesayetu/components/NewsTabStories/NewsGrid";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

function NewsTabStories({
  featuredStoryProps,
  dataInsightDataProps,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column">
      <Section classes={{ root: classes.section }}>
        <Grid item>
          <FeaturedStoryCard {...featuredStoryProps} />
        </Grid>
        <NewsGrid {...dataInsightDataProps} />
      </Section>
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
