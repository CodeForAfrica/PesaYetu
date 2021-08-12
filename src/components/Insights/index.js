/* eslint-disable no-console */
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
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

function Insights({ featuredStoryProps, items, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? 6 : 3;
  const carouselItems = chunk(items, itemsToShow);

  return (
    <Grid container direction="column">
      <Section classes={{ root: classes.section }}>
        <Grid item>
          <FeaturedStoryCard
            {...featuredStoryProps}
            classes={{
              media: classes.featuredCardImage,
            }}
          />
        </Grid>
        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots
          dotListClass={classes.dots}
        >
          {carouselItems.map((ci) => (
            <CarouselItem items={ci} />
          ))}
        </Carousel>
      </Section>
    </Grid>
  );
}

Insights.propTypes = {
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Insights.defaultProps = {
  featuredStoryProps: undefined,
  items: undefined,
};

export default Insights;
