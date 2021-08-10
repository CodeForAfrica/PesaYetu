import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import InsightsData from "@/pesayetu/components/InsightsData";
import Section from "@/pesayetu/components/Section";

function InsightTabStories({
  featuredInsightProps,
  insightDataProps,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.root}>
      <Section
        classes={{
          root: classes.section,
        }}
      >
        <Grid item>
          <FeaturedStoryCard
            {...featuredInsightProps}
            classes={{
              media: classes.media,
            }}
          />
        </Grid>
        <Grid item>
          <Grid container className={classes.insightStories}>
            <InsightsData {...insightDataProps} />
          </Grid>
        </Grid>
      </Section>
    </Grid>
  );
}

InsightTabStories.propTypes = {
  featuredInsightProps: PropTypes.shape({}),
  insightDataProps: PropTypes.arrayOf(PropTypes.shape({})),
};

InsightTabStories.defaultProps = {
  featuredInsightProps: undefined,
  insightDataProps: undefined,
};

export default InsightTabStories;
