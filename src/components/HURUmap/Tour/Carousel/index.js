import PropTypes from "prop-types";
import React from "react";

import CarouselItem from "./CarouselItem";

import Carousel from "@/pesayetu/components/Carousel";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function TourCarousel({ slides }) {
  return (
    <Carousel responsive={responsive} showDots>
      {slides.map((slide, index) => (
        <CarouselItem
          key={slide.description}
          activeStep={index + 1}
          steps={slides.length}
          {...slide}
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
