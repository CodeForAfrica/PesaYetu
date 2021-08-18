import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(80),
    },
  },
  dataVisualCard: {
    height: "100%",
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(189),
      maxWidth: typography.pxToRem(350),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  description: {
    width: typography.pxToRem(350),
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      width: "auto",
    },
  },
  button: {
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  cardMedia: {
    position: "relative",
    [breakpoints.up("md")]: {
      position: "absolute",
    },
    [breakpoints.up("lg")]: {
      position: "absolute",
      height: typography.pxToRem(415),
      width: typography.pxToRem(768),
    },
  },
  title: {
    paddingTop: "1rem",
  },
  metrics: {
    padding: `${typography.pxToRem(10)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
}));

export default useStyles;
