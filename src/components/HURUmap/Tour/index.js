import PropTypes from "prop-types";
import React from "react";
import ReactTour from "reactour";

import TourCarousel from "./Carousel";
import useStyles from "./useStyles";

import Line from "@/pesayetu/components/HURUmap/Tour/Line";

const Tour = ({ items, ...props }) => {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectedChange = (selector) => {
    setSelected(selector);
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
        isOpen={open}
        onRequestClose={handleClose}
      >
        <TourCarousel
          onSelectedChange={handleSelectedChange}
          onClose={handleClose}
          slides={items}
        />
      </ReactTour>
      <Line firstSelector="#carousel-title" secondSelector={selected} />
    </div>
  );
};

Tour.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

Tour.defaultProps = {
  items: [
    {
      selector: ".makeStyles-help-21",
      description: "Sdsdsd",
      title: "Sdsdsd",
      image:
        "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/09/Group-4780-1.svg",
    },
  ],
};

export default Tour;
