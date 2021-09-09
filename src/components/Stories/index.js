import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import Carousel from "@/pesayetu/components/Carousel";
import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import fetchAPI from "@/pesayetu/utils/fetchApi";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function Stories({
  featuredStoryProps,
  items,
  category,
  pagination,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? 6 : 3;
  const variant = category === "insights" ? "embed" : undefined;

  // Track all news, including initial news and additionally loaded pages.
  const [allStories, setAllStories] = useState(items);
  // Track carousel slide
  const [nextItemIndex, setNextItemIndex] = useState();
  const [paginator, setPaginator] = useState(pagination);

  useEffect(() => {
    setAllStories(items);
  }, [items]);

  const fetchMore =
    paginator?.hasNextPage &&
    allStories.length - nextItemIndex * itemsToShow <= itemsToShow;

  const { data: moreStoriesProps } = useSWR(
    fetchMore ? ["/api/wp/archive", category, paginator?.endCursor] : null,
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
      <FeaturedStoryCard {...featuredStoryProps} variant={variant} />
      <Carousel
        responsive={responsive}
        beforeChange={(nextSlide) => {
          setNextItemIndex(nextSlide);
        }}
      >
        {carouselItems.map((ci) => (
          <CarouselItem items={ci} variant={variant} key={ci[0].slug} />
        ))}
      </Carousel>
    </div>
  );
}

Stories.propTypes = {
  category: PropTypes.string,
  featuredStoryProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(PropTypes.shape({})),
  pagination: PropTypes.shape({
    hasNextPage: PropTypes.bool,
  }),
};

Stories.defaultProps = {
  category: undefined,
  featuredStoryProps: undefined,
  items: undefined,
  pagination: undefined,
};

export default Stories;
