import { deepmerge } from "@material-ui/utils";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import RMCarousel from "react-multi-carousel";

import useStyles from "./useStyles";

import "react-multi-carousel/lib/styles.css";

const DEFAULT_RESPONSIVE = {
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

const Carousel = React.forwardRef(function Carousel(props, ref) {
  const { children, className, responsive, ...other } = props;
  const classes = useStyles(other);

  return (
    <RMCarousel
      ref={ref}
      draggable
      swipeable
      responsive={deepmerge(DEFAULT_RESPONSIVE, responsive, { clone: true })}
      arrows={false}
      renderDotsOutside
      showDots
      ssr
      {...other}
      dotListClass={classes.dotList}
      className={clsx(classes.root, className)}
    >
      {children}
    </RMCarousel>
  );
});

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  responsive: PropTypes.shape({}),
};

Carousel.defaultProps = {
  children: undefined,
  className: undefined,
  responsive: undefined,
};

export default Carousel;
