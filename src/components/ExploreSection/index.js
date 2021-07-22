import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';

import useStyles from './useStyles';

import ExploreCard from '@/pesayetu/components/ExploreCard';
import Section from '@/pesayetu/components/Section';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ExploreTools = ({ title, items, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section>
        <Typography variant="h3" className={classes.title}>
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

ExploreTools.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.objectOf(PropTypes.any),
    })
  ),
};

ExploreTools.defaultProps = {
  title: undefined,
  items: undefined,
};

export default ExploreTools;
