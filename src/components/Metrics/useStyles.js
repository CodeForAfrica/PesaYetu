import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  dataVisualCard: {
    width: typography.pxToRem(768),
    height: typography.pxToRem(415),
  },
  content: {},
  cardMedia: {
    height: typography.pxToRem(215),
    position: "absolute",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  grid: {
    padding: "4rem 0rem",
  },
}));

export default useStyles;
