import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import CarouselItem from "./CarouselItem";
import useStyles from "./useStyles";

import Carousel from "@/pesayetu/components/Carousel";
import Header from "@/pesayetu/components/Header";
import Section from "@/pesayetu/components/Section";

const responsive = {
  desktop: {
    items: 1,
  },
  tablet: {
    items: 1,
  },
};

function StoriesInsights({ overline, title, stories, ...props }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const classes = useStyles({ currentSlide, ...props });
  const carouselRef = useRef(null);

  if (!stories?.length) {
    return null;
  }
  const handleAfterChange = (slide) => {
    setCurrentSlide(slide);
  };
  const handleDotClick = (index) => {
    carouselRef?.current?.goToSlide(index);
  };
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Header overline={overline} className={classes.header}>
          {title}
        </Header>
      </Section>

      <Carousel
        ref={carouselRef}
        responsive={responsive}
        showDots={false}
        containerClass={classes.carouselList}
        beforeChange={handleAfterChange}
        className={classes.carousel}
      >
        {stories.map((story) => (
          <CarouselItem
            key={story.slug}
            activeStep={currentSlide}
            onClick={handleDotClick}
            steps={stories.length}
            story={story}
          />
        ))}
      </Carousel>
    </div>
  );
}

StoriesInsights.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      chart: PropTypes.string,
    })
  ),
};

StoriesInsights.defaultProps = {
  overline: undefined,
  title: undefined,
  stories: undefined,
};

export default StoriesInsights;
