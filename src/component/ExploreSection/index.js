import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import useStyles from './useStyles';

import ExploreCard from '@/pesayetu/component/ExploreCard';
import Section from '@/pesayetu/component/Section';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1160,
    },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1160, min: 608 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 608, min: 0 },
    items: 1,
  },
};

const ExploreSection = ({ title, items, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>

        <Carousel
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

ExploreSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

ExploreSection.defaultProps = {
  title: undefined,
  items: undefined,
};

export default ExploreSection;
