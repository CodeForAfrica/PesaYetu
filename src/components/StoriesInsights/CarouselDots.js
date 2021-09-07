import { MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    background: "inherit",
    padding: 0,
    marginTop: typography.pxToRem(40),
    [breakpoints.up("lg")]: {
      marginTop: 0,
    },
  },
  dot: {
    height: typography.pxToRem(16),
    margin: 0,
    marginRight: typography.pxToRem(20),
    width: typography.pxToRem(16),
    backgroundColor: "inherit",
    border: `2px solid #1C2031`,
    cursor: "pointer",
  },
  dotActive: {
    background: `#1C2031`,
    cursor: "default",
  },
  dots: {
    padding: 0,
  },
}));

function CarouselDots({ activeStep, onClick, steps, ...props }) {
  const classes = useStyles(props);
  const stepperRef = useRef();

  useEffect(() => {
    const dotsEl = stepperRef.current?.getElementsByClassName(
      "MuiMobileStepper-dots"
    )?.[0];
    if (!(dotsEl || onClick)) {
      return;
    }

    function handleClick(index) {
      if (onClick) {
        onClick(index);
      }
    }
    dotsEl.childNodes.forEach((dotEl, i) => {
      const handleDotClick = () => handleClick(i);
      dotEl.addEventListener("click", handleDotClick);
      return handleDotClick;
    });
  }, [onClick]);

  if (!steps) {
    return null;
  }
  return (
    <MobileStepper
      ref={stepperRef}
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      classes={{
        root: classes.root,
        dot: classes.dot,
        dotActive: classes.dotActive,
        dots: classes.dots,
      }}
    />
  );
}

CarouselDots.propTypes = {
  activeStep: PropTypes.number,
  onClick: PropTypes.func,
  steps: PropTypes.number,
};

CarouselDots.defaultProps = {
  activeStep: 0,
  onClick: undefined,
  steps: undefined,
};

export default CarouselDots;
