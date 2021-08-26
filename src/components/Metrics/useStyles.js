import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  metrics: {
    padding: `${typography.pxToRem(10)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(480),
    },
  },
  card: {
    maxWidth: "100%",
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(350),
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(768),
    },
  },
  cardMedia: {
    position: "relative",
    height: typography.pxToRem(215),
    width: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(215),
      width: typography.pxToRem(350),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  title: {},
  image: {},
  description: {
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

export default useStyles;
