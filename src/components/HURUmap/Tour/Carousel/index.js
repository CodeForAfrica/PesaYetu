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

function TourCarousel({ slides, onSelectedChange, ...props }) {
  const classes = useStyles(props);

  return (
    <Carousel
      classes={{ itemClass: classes.itemClass }}
      className={classes.carousel}
      responsive={responsive}
      afterChange={(previousSlide, { currentSlide }) => {
        onSelectedChange(currentSlide);
      }}
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
  onSelectedChange: PropTypes.func,
};

TourCarousel.defaultProps = {
  slides: undefined,
  onSelectedChange: undefined,
};

export default TourCarousel;
