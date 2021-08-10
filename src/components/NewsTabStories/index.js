import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import InsightsData from "@/pesayetu/components/InsightsData";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};
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
        <Grid item>
          <Carousel
            swipeable
            responsive={responsive}
            arrows={false}
            renderDotsOutside
            showDots
            dotListClass={classes.dots}
          >
            <InsightsData
              {...dataInsightDataProps}
              classes={{
                root: classes.root,
              }}
            />
          </Carousel>
        </Grid>
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
