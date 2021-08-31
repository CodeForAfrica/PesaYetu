import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import DataFilter from "@/pesayetu/components/DataFilter";
import SourceItem from "@/pesayetu/components/Sources/SourceItem";
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
function Sources({ items, filterProps, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? 6 : 5;
  if (!items?.length) {
    return null;
  }
  const carouselItems = chunk(items, itemsToShow);
  return (
    <div classesName={classes.root}>
      {/*  hidden component */}
      {!isMobile && <DataFilter {...filterProps} />}
      <Carousel
        swipeable
        responsive={responsive}
        arrows={false}
        renderDotsOutside
        showDots
        dotListClass={classes.dots}
      >
        {carouselItems.map((ci) => (
          <SourceItem
            items={ci}
            key={ci[0].title}
            classes={{
              title: classes.title,
              text: classes.text,
              sources: classes.sources,
              description: classes.description,
              textContent: classes.textContent,
              linkContent: classes.linkContent,
              link: classes.link,
            }}
          />
        ))}
      </Carousel>
    </div>
  );
}

Sources.propTypes = {
  filterProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      types: PropTypes.arrayOf({}),
    })
  ),
};

Sources.defaultProps = {
  items: undefined,
  filterProps: undefined,
};

export default Sources;
