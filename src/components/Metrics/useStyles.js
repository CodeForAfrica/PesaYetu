import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    paddingTop: typography.pxToRem(80),
  },
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
  description: {
    paddingTop: typography.pxToRem(40),
  },
  button: {
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  moveOrder: {
    padding: `${typography.pxToRem(80)} 0`,
    order: 4,
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
    padding: `${typography.pxToRem(80)} 0`,
  },
}));

export default useStyles;
