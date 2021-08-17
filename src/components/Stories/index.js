import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import useSWR from "swr";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import Section from "@/pesayetu/components/Section";
import fetchAPI from "@/pesayetu/utils/fetchApi";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";

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

function Stories({
  featuredStoryProps,
  items,
  activeCategory,
  pagination,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? 6 : 3;

  // Track all news, including initial news and additionally loaded pages.
  const [allStories, setAllStories] = useState(items);
  // Track carousel slide
  const [nextItemIndex, setNextItemIndex] = useState();
  const [paginator, setPaginator] = useState(pagination);

  const fetchMore =
    paginator?.hasNextPage &&
    allStories.length - nextItemIndex * itemsToShow <= itemsToShow;
  const { data: moreStoriesProps } = useSWR(
    fetchMore
      ? ["/api/wp/archive", activeCategory, paginator?.endCursor]
      : null,
    (url, taxonomyId, cursor) =>
      fetchAPI(`${url}/?taxonomyId=${taxonomyId}&cursor=${cursor}`)
  );

  if (fetchMore && moreStoriesProps) {
    const moreFormatStories = formatStoryPosts(
      moreStoriesProps?.posts,
      featuredStoryProps
    );
    setAllStories([...allStories, ...(moreFormatStories ?? [])]);
    const newPaginator = moreStoriesProps?.pagination;
    setPaginator(newPaginator);
  }

  const carouselItems = chunk(allStories, itemsToShow);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <FeaturedStoryCard {...featuredStoryProps} variant={activeCategory} />
        <React.StrictMode>
          <Carousel
            swipeable
            responsive={responsive}
            arrows={false}
            renderDotsOutside
            showDots
            dotListClass={classes.dots}
            beforeChange={(nextSlide) => {
              setNextItemIndex(nextSlide);
            }}
          >
            {carouselItems.map((ci) => (
              <CarouselItem
                items={ci}
                activeCategory={activeCategory}
                key={ci[0].slug}
              />
            ))}
          </Carousel>
        </React.StrictMode>
      </Section>
    </div>
  );
}

Stories.propTypes = {
  activeCategory: PropTypes.string,
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(PropTypes.shape({})),
  pagination: PropTypes.shape({
    hasNextPage: PropTypes.bool,
  }),
};

Stories.defaultProps = {
  activeCategory: undefined,
  featuredStoryProps: undefined,
  items: undefined,
  pagination: undefined,
};

export default Stories;
