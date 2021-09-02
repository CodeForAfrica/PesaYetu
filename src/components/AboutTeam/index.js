import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";

import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";
import Section from "@/pesayetu/components/Section";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 4,
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

const DataVisuals = ({ title, items, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section>
        {title && (
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        )}
        <Carousel
          swipeable
          responsive={responsive}
          arrows={false}
          renderDotsOutside
          showDots
          dotListClass={classes.dots}
        >
          {items?.map((item) => (
            <Card {...item} key={item.image} mediaProps={{ square: true }} />
          ))}
        </Carousel>
      </Section>
    </div>
  );
};

DataVisuals.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

DataVisuals.defaultProps = {
  title: undefined,
  items: undefined,
};

export default DataVisuals;
