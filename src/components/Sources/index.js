import { Hidden, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import Carousel from "@/pesayetu/components/Carousel";
import SourcesFilter from "@/pesayetu/components/SourcesFilter";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function Sources({ ctaText, filterProps, items, type, ...props }) {
  const classes = useStyles({ ...props, type });
  const { paginationOptions } = filterProps;
  const [sortOrder, setSortOrder] = useState();
  const [sortedItems, setSortedItems] = useState(items);
  const [pageSize, setPageSize] = useState(
    paginationOptions && paginationOptions[0]
  );
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? pageSize : 5;
  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };
  useEffect(() => {
    // Array.sort happens "in place" so we need to copy the array for useState
    // to notice the change
    // see: https://github.com/facebook/react/issues/19780#issuecomment-688068412
    if (sortOrder) {
      if (sortOrder?.toLowerCase() === "least recently updated") {
        setSortedItems([...items.sort((a, b) => a.date.localeCompare(b.date))]);
      } else if (sortOrder?.toLowerCase() === "most recently updated") {
        setSortedItems([...items.sort((a, b) => b.date.localeCompare(a.date))]);
      }
    }
  }, [items, sortOrder]);

  if (!sortedItems?.length) {
    return null;
  }
  const carouselItems = chunk(sortedItems, itemsToShow);
  return (
    <div classesName={classes.root}>
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
      <Carousel
        responsive={responsive}
        showDots={sortedItems.length > itemsToShow}
        classes={{ dotList: classes.carouselDotList }}
      >
        {carouselItems.map((ci) => (
          <CarouselItem
            key={ci[0].title}
            ctaText={ctaText}
            items={ci}
            type={type}
            classes={{
              root: classes.carouselItem,
              source: classes.source,
              text: classes.text,
              title: classes.title,
              date: classes.date,
              resourceType: classes.resourceType,
              cta: classes.cta,
            }}
          />
        ))}
      </Carousel>
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
      types: PropTypes.arrayOf({}),
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
