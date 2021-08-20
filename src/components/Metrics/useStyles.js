import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  dataVisualCard: {
    height: "100%",
    width: "100%",
  },
  description: {
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
  cardMedia: {
    position: "relative",
    [breakpoints.up("md")]: {
      position: "absolute",
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  title: {
    paddingTop: typography.pxToRem(16),
  },
  image: {},
  metrics: {
    padding: `${typography.pxToRem(10)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(480),
    },
  },
}));

export default useStyles;
