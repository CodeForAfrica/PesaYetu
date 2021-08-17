import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  dataVisualCard: {
    width: typography.pxToRem(768),
    height: typography.pxToRem(415),
  },
  content: {},
  subtitle: {
    paddingTop: "40px",
  },

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
    padding: "80px 0rem",
  },
  gridOne: {
    paddingTop: "16.5px",
  },
  secondGrid: {
    marginLeft: "-1rem",
  },
}));

export default useStyles;
