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
    width: "100%",
    maxWidth: "unset",
    height: "100%",
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
  title: {
    paddingTop: typography.pxToRem(16),
  },
  image: {},
  description: {
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

export default useStyles;
