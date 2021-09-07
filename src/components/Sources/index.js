import { Hidden, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import React from "react";

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

function Sources({ filterProps, items, type, ...props }) {
  const classes = useStyles({ ...props, type });
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const itemsToShow = isTablet ? 6 : 5;

  if (!items?.length) {
    return null;
  }
  const carouselItems = chunk(items, itemsToShow);
  return (
    <div classesName={classes.root}>
      <Hidden smDown implementation="css">
        <SourcesFilter {...filterProps} />
      </Hidden>
      <Carousel responsive={responsive} classes={{ dotList: classes.dotList }}>
        {carouselItems.map((ci) => (
          <CarouselItem
            key={ci[0].title}
            items={ci}
            type={type}
            classes={{
              title: classes.title,
              text: classes.text,
              sources: classes.sources,
              description: classes.description,
              dataTypes: classes.dataTypes,
              typeContent: classes.typeContent,
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
  type: PropTypes.oneOf(["datasets", "documents"]),
};

Sources.defaultProps = {
  items: undefined,
  filterProps: undefined,
  type: undefined,
};

export default Sources;
