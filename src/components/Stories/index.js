import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import List from "./List";
import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
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

  const [posts, setPosts] = useState(itemsProp);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickPage = (_, value) => {
    if (paginate) {
      paginate(value);
    }
  };

  const { data, error } = useSWR(
    ["/api/wp/archive", category, page],
    (url, taxonomyId, pageProp) => {
      let offset;
      if (pageProp === 1) {
        offset = 0;
      } else if (pageProp === 2) {
        offset = 6;
      } else {
        offset = (pageProp - 2) * 9 + 6;
      }
      return fetchAPI(`${url}/?taxonomyId=${taxonomyId}&offset=${offset}`);
    }
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
      setIsLoading(false);
    } else if (!data && !error) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data, error]);

  let items = posts;
  if (page === 1) {
    items = posts
      ?.filter(({ slug }) => slug !== featuredStoryProps?.slug)
      ?.slice(0, 6);
  }

  return (
    <div className={classes.root}>
      {page === 1 && (
        <FeaturedStoryCard {...featuredStoryProps} variant={variant} />
      )}
      {isLoading && <CircularProgress classes={{ root: classes.progress }} />}
      <List
        items={items}
        variant={variant}
        ctaText={featuredStoryProps.ctaText}
      />
      <Pagination
        count={Math.ceil(pagination.offsetPagination.total / 9)}
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
