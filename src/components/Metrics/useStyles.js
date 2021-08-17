import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  dataVisualCard: {
    height: typography.pxToRem(189),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(189),
      maxWidth: typography.pxToRem(350),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  subtitle: {
    paddingTop: "40px",
  },

  cardMedia: {
    position: "relative",
    [breakpoints.up("md")]: {
      position: "absolute",
      height: typography.pxToRem(189),
      width: typography.pxToRem(350),
    },
    [breakpoints.up("lg")]: {
      position: "absolute",
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  metrics: {
    padding: "80px 0rem",
  },
  secondGrid: {
    marginLeft: "-1rem",
  },
}));

export default useStyles;
