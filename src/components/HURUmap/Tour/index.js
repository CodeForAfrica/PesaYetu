import PropTypes from "prop-types";
import React from "react";
import ReactTour from "reactour";

import TourCarousel from "./Carousel";
import useStyles from "./useStyles";

import Line from "@/pesayetu/components/HURUmap/Tour/Line";

const Tour = ({ items, handleTooltipClose, ...props }) => {
  const classes = useStyles(props);
  const [step, setStep] = React.useState(0);

  const handleClose = () => {
    handleTooltipClose(false);
  };
  const handleSelectedChange = (currentStep) => {
    setStep(currentStep);
  };
  return (
    <div className={classes.root}>
      <ReactTour
        showNavigation={false}
        showButtons={false}
        showNavigationNumber={false}
        showNumber={false}
        showCloseButton={false}
        className={classes.tourReact}
        steps={items}
        goToStep={step}
        isOpen
        onRequestClose={handleClose}
      >
        <TourCarousel
          onSelectedChange={handleSelectedChange}
          onClose={handleClose}
          slides={items}
        />
      </ReactTour>
      <Line
        firstSelector="#carousel-title"
        secondSelector={items[step].selector}
      />
    </div>
  );
};

Tour.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
    })
  ),
  handleTooltipClose: PropTypes.func,
};

Tour.defaultProps = {
  items: undefined,
  handleTooltipClose: undefined,
};

export default Tour;
