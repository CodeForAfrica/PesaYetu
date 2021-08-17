import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import ExploreCard from "@/pesayetu/components/ExploreCard";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const ExploreOtherTools = ({ title, items, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>

        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots
          dotListClass={classes.dots}
        >
          {items?.map((item) => (
            <ExploreCard key={item.title} item={item} />
          ))}
        </Carousel>
      </Section>
    </div>
  );
};

ExploreOtherTools.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

ExploreOtherTools.defaultProps = {
  title: undefined,
  items: undefined,
};

export default ExploreOtherTools;
