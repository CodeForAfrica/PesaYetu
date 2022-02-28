import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import List from "./List";
import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import Loading from "@/pesayetu/components/Loading";
import Pagination from "@/pesayetu/components/Pagination";
import fetchAPI from "@/pesayetu/utils/fetchApi";

function Stories({
  featuredStoryProps,
  items: itemsProp,
  category,
  pagination,
  page,
  paginate,
  ...props
}) {
  const classes = useStyles(props);
  const variant = category === "insights" ? "embed" : undefined;

  const [stories, setStories] = useState(itemsProp);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickPage = (_, value) => {
    if (paginate) {
      paginate(value);
    }
  };

  const { data, error } = useSWR("/api/wp/archive", (url) => {
    let offset;
    if (page === 1) {
      offset = 0;
    } else if (page === 2) {
      offset = 6;
    } else {
      offset = (page - 2) * 9 + 6;
    }
    return fetchAPI(`${url}/?taxonomyId=${category}&offset=${offset}`);
  });

  useEffect(() => {
    if (!data && !error) {
      setIsLoading(true);
    } else {
      if (data) {
        setStories(data);
      }
      setIsLoading(false);
    }
  }, [data, error]);

  let items = stories;
  if (page === 1) {
    items = stories
      ?.filter(({ slug }) => slug !== featuredStoryProps?.slug)
      ?.slice(0, 6);
  }

  return (
    <div className={classes.root}>
      {page === 1 && (
        <FeaturedStoryCard {...featuredStoryProps} variant={variant} />
      )}
      {isLoading && <Loading />}
      <List
        items={items}
        key={category}
        variant={variant}
        ctaText={featuredStoryProps.ctaText}
      />
      <Pagination
        count={Math.ceil((pagination?.offsetPagination?.total ?? 0) / 9)}
        onChangePage={handleClickPage}
        page={page}
        pageSize={9}
      />
    </div>
  );
}

Stories.propTypes = {
  category: PropTypes.string,
  featuredStoryProps: PropTypes.shape({
    slug: PropTypes.string,
    ctaText: PropTypes.string,
  }),
  items: PropTypes.arrayOf(PropTypes.shape({})),
  page: PropTypes.number,
  paginate: PropTypes.func,
  pagination: PropTypes.shape({
    offsetPagination: PropTypes.shape({
      total: PropTypes.number,
    }),
  }),
};

Stories.defaultProps = {
  category: undefined,
  featuredStoryProps: undefined,
  items: undefined,
  paginate: undefined,
  pagination: undefined,
  page: undefined,
};

export default Stories;
