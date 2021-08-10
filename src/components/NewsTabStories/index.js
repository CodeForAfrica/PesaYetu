import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import InsightCard from "@/pesayetu/components/InsightCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 3,
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
function NewsTabStories({ featuredStoryProps, itemsData, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid item>
          <FeaturedStoryCard {...featuredStoryProps} />
        </Grid>
        <Grid item className={classes.stories}>
          <Carousel
            swipeable
            responsive={responsive}
            arrows={false}
            renderDotsOutside
            showDots
            dotListClass={classes.dots}
          >
            {itemsData &&
              itemsData?.map((item) => (
                <InsightCard key={item.title} {...item} />
              ))}
          </Carousel>
        </Grid>
      </Section>
    </Grid>
  );
}
NewsTabStories.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

NewsTabStories.defaultProps = {
  featuredStoryProps: undefined,
  itemsData: undefined,
};

export default NewsTabStories;
