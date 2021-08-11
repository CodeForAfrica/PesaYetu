/* eslint-disable no-console */
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const chunkItems = (list, size) =>
  list.reduce(
    (acc, items) =>
      (!acc.length || acc[acc.length - 1].length === size
        ? acc.push([items])
        : acc[acc.length - 1].push(items)) && acc,
    []
  );

function NewsTabStories({ featuredStoryProps, items, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const showItemsData = isTablet ? chunkItems(items, 6) : chunkItems(items, 3);
  return (
    <Grid container direction="column">
      <Section classes={{ root: classes.section }}>
        <Grid item>
          <FeaturedStoryCard {...featuredStoryProps} />
        </Grid>
        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots
          dotListClass={classes.dots}
        >
          <Grid container item className={classes.stories}>
            {showItemsData &&
              showItemsData?.map((item) => (
                <InsightCard key={item.title} {...item} />
              ))}
          </Grid>
        </Carousel>
      </Section>
    </Grid>
  );
}
NewsTabStories.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

NewsTabStories.defaultProps = {
  featuredStoryProps: undefined,
  items: undefined,
};

export default NewsTabStories;
