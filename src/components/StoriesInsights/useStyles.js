import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
  },
  section: {
    overflow: "hidden",
  },
  header: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(80),
    },
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(85),
    },
  },
  carouselList: {
    order: 2,
    width: "100%",
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(270),
    },
  },
  dotList: {
    margin: 0,
    padding: `${typography.pxToRem(40)} 0`,
    order: 1,
    justifyContent: "flex-start",
    [breakpoints.up("lg")]: {
      padding: `0 0 ${typography.pxToRem(40)} 0`,
    },
  },
  fullWidth: {
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0px 3px 6px #00000029",
    backgroundColor: palette.background.default,
    [breakpoints.up("md")]: {
      left: "50%",
      right: "50%",
      margin: `0 -50vw`,
    },
    [breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "100%",
      left: 0,
      right: 0,
    },
  },
  chartContainer: ({ currentItemIndex }) => {
    return {
      visibility: "hidden",
      height: 0,
      opacity: 0,
      transition: "transform 400ms ease-in-out",
      overflow: "unset",
      transform: `translate3d(${-100 * currentItemIndex}vw,0,0)`,
      [breakpoints.up("md")]: {
        transform: `translate3d(${typography.pxToRem(
          -608 * currentItemIndex
        )},0,0)`,
      },
      [breakpoints.down("lg")]: {
        transform: `translate3d(${typography.pxToRem(
          -768 * currentItemIndex
        )},0,0)`,
      },
    };
  },
  chart: {
    "& > iframe": {
      height: "100%",
    },
    height: typography.pxToRem(400),
    width: "100%",
    padding: `0 ${typography.pxToRem(20)}`,
    margin: "0 auto",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(476),
      width: typography.pxToRem(608),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(530),
      width: typography.pxToRem(768),
      padding: `${typography.pxToRem(30)} ${typography.pxToRem(
        33
      )} ${typography.pxToRem(27)}`,
    },
  },
  currentChart: () => {
    return {
      visibility: "visible",
      opacity: 1,
      height: "100%",
    };
  },
}));

export default useStyles;
