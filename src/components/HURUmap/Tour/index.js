import { makeStyles } from "@material-ui/core/styles";
import { TourProvider } from "@reactour/tour";
import PropTypes from "prop-types";
import React from "react";

import Connector from "@/pesayetu/components/HURUmap/Tour/Connector";
import ToolTipItem from "@/pesayetu/components/HURUmap/Tour/ToolTipItem";

const useStyles = makeStyles(({ typography, palette }) => ({
  tour: {
    width: typography.pxToRem(1000),
    maxWidth: "100vw  !important",
    top: "50% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    paddingBottom: `${typography.pxToRem(48.62)} !important`,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: `1px solid ${palette.primary.main}`,
    borderRadius: typography.pxToRem(10),
    "--reactour-accent": "#1C2030",
  },
  highlightedMask: {
    height: 0,
  },
  mask: {
    color: "#666666 !important",
    opacity: "0.5 !important",
  },
}));

export default function Tour({ children, items }) {
  const classes = useStyles();
  return (
    <TourProvider
      position="center"
      className={classes.tour}
      showPrevNextButtons={false}
      showBagde={false}
      showCloseButton={false}
      accentColor="#fff"
      maskClassName={classes.mask}
      highlightedMaskClassName={classes.highlightedMask}
      steps={items.map((item, index) => ({
        selector: item.selector,
        content: <ToolTipItem activeStep={index + 1} {...item} />,
      }))}
    >
      <Connector />
      {children}
    </TourProvider>
  );
}
Tour.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.node,
};

Tour.defaultProps = {
  items: undefined,
  children: undefined,
};
