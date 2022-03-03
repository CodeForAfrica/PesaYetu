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
  onPaginate,
  ...props
}) {
  const classes = useStyles(props);
  const variant = category === "insights" ? "embed" : undefined;

  const [stories, setStories] = useState(itemsProp);
  const [shouldFetch, setShouldFetch] = useState(false);

  const handleClickPage = (_, value) => {
    if (onPaginate) {
      onPaginate(value);
    }
    setShouldFetch(true);
  };

  const { data, error } = useSWR(
    shouldFetch ? "/api/wp/archive" : null,
    (url) => {
      let offset;
      if (page < 2) {
        offset = 0;
      } else {
        offset = (page - 2) * 9 + 6;
      }
      return fetchAPI(`${url}/?taxonomyId=${category}&offset=${offset}`);
    }
  );

  useEffect(() => {
    if (data) {
      setStories(data);
      setShouldFetch(false);
    }
  }, [data]);

  const isLoading = !data && !error && shouldFetch;
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
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
  onPaginate: PropTypes.func,
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
  onPaginate: undefined,
  pagination: undefined,
  page: undefined,
};

export default Stories;
