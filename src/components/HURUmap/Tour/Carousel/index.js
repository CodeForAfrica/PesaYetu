import PropTypes from "prop-types";
import React from "react";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import Carousel from "@/pesayetu/components/Carousel";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function TourCarousel({ slides, ...props }) {
  const classes = useStyles(props);

  return (
    <Carousel
      classes={{ itemClass: classes.itemClass }}
      className={classes.carousel}
      responsive={responsive}
      showDots
    >
      {slides.map((slide, index) => (
        <CarouselItem
          key={slide.description}
          activeStep={index + 1}
          steps={slides.length}
          {...slide}
          {...props}
        />
      ))}
    </Carousel>
  );
}

TourCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    })
  ),
};

TourCarousel.defaultProps = {
  slides: undefined,
};

export default TourCarousel;
