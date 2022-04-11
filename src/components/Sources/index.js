import { Hidden, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import List from "./List";
import useStyles from "./useStyles";

import Pagination from "@/pesayetu/components/Pagination";
import SourcesFilter from "@/pesayetu/components/SourcesFilter";

function Sources({ ctaText, filterProps, items, type, ...props }) {
  const classes = useStyles({ ...props, type });
  const contentRef = useRef();
  const { paginationOptions } = filterProps;
  const [sortOrder, setSortOrder] = useState();
  const [sortedItems, setSortedItems] = useState(items);
  const [page, setPage] = useState(1);
  const [isPaginating, setIsPaginating] = useState(false);
  const [pageSize, setPageSize] = useState(
    paginationOptions && paginationOptions[0]
  );
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? pageSize : 5;
  const handleSort = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
    setIsPaginating(true);
  };

  const handleClickPage = (e, value) => {
    setPage(value);
    setIsPaginating(true);
  };
  useEffect(() => {
    // Array.sort happens "in place" so we need to copy the array for useState
    // to notice the change
    // see: https://github.com/facebook/react/issues/19780#issuecomment-688068412
    if (sortOrder && items?.length) {
      if (sortOrder?.toLowerCase() === "least recently updated") {
        setSortedItems([
          ...items.sort((a, b) => a?.date?.localeCompare(b?.date)),
        ]);
      } else if (sortOrder?.toLowerCase() === "most recently updated") {
        setSortedItems([
          ...items.sort((a, b) => b?.date?.localeCompare(a?.date)),
        ]);
      }
    }
  }, [items, sortOrder]);

  useEffect(() => {
    if (isPaginating && contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [page, isPaginating]);

  if (!sortedItems?.length) {
    return null;
  }

  const total = sortedItems.length;
  const count = Math.ceil(total / itemsToShow) ?? 0;

  return (
    <div classesName={classes.root} ref={contentRef}>
      <Hidden smDown implementation="css">
        <SourcesFilter
          {...filterProps}
          count={items.length}
          onPageSize={setPageSize}
          onSort={handleSort}
          pageSize={pageSize}
          sortOrder={sortOrder}
        />
      </Hidden>
      <List
        ctaText={ctaText}
        items={sortedItems?.slice((page - 1) * itemsToShow, page * itemsToShow)}
        type={type}
        classes={{
          root: classes.list,
          source: classes.source,
          text: classes.text,
          title: classes.title,
          date: classes.date,
          resourceType: classes.resourceType,
          cta: classes.cta,
        }}
      />
      {count > 1 && (
        <Pagination
          count={count}
          page={page}
          pageSize={itemsToShow}
          onChangePage={handleClickPage}
        />
      )}
    </div>
  );
}

Sources.propTypes = {
  ctaText: PropTypes.string,
  filterProps: PropTypes.shape({
    paginationOptions: PropTypes.arrayOf(PropTypes.number),
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  type: PropTypes.oneOf(["datasets", "documents"]),
};

Sources.defaultProps = {
  ctaText: undefined,
  filterProps: undefined,
  items: undefined,
  type: undefined,
};

export default Sources;
