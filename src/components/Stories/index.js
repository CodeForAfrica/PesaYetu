import PropTypes from "prop-types";
import React from "react";

import List from "./List";
import useStyles from "./useStyles";

import FeaturedStoryCard from "@/pesayetu/components/FeaturedStoryCard";
import Loading from "@/pesayetu/components/Loading";
import Pagination from "@/pesayetu/components/Pagination";

function Stories({
  featuredStoryProps,
  items: itemsProp,
  category,
  pagination,
  page,
  onPaginate,
  isLoading,
  ...props
}) {
  const classes = useStyles(props);
  const variant = category === "insights" ? "embed" : undefined;

  const handleClickPage = (_, value) => {
    if (onPaginate) {
      onPaginate(value);
    }
  };

  let items = itemsProp;
  if (page === 1) {
    items = itemsProp
      ?.filter(({ slug }) => slug !== featuredStoryProps?.slug)
      ?.slice(0, 6);
  }
  const total = pagination?.offsetPagination?.total ?? 0;
  const count = total ? 1 + Math.ceil(Math.max(total - 6, 0) / 9) : 0;

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
        count={count}
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
  isLoading: PropTypes.bool,
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
  isLoading: undefined,
  items: undefined,
  onPaginate: undefined,
  pagination: undefined,
  page: undefined,
};

export default Stories;
