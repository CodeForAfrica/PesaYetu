import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
    paddingBottom: typography.pxToRem(60),
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(80),
      paddingTop: typography.pxToRem(80),
    },
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(60),
    },
  },
  section: {},
  header: {
    marginBottom: typography.pxToRem(40),
    [breakpoints.up("lg")]: {
      marginBottom: typography.pxToRem(85),
    },
  },
  carousel: {},
  mediaContainer: {
    backgroundColor: palette.background.default,
    height: "100%",
    marginLeft: typography.pxToRem(7.5),
    marginRight: typography.pxToRem(10),
    paddingBottom: typography.pxToRem(20),
    position: "relative",
    [breakpoints.up("md")]: {
      margin: 0,
      padding: `${typography.pxToRem(14)} 0 ${typography.pxToRem(34)}`,
    },
    [breakpoints.up("lg")]: {
      margin: 0,
      padding: `${typography.pxToRem(10)} ${typography.pxToRem(
        33
      )} ${typography.pxToRem(27)}`,
    },
    "&:after": {
      position: "absolute",
      bottom: 0,
      content: "''",
      boxShadow: `0px 3px 6px ${alpha(palette.common.black, 0.16)}`, // #00000029
      left: 0,
      right: 0,
      top: 0,
      [breakpoints.up("lg")]: {
        // ensure drop-shadow is visible
        bottom: 3,
      },
    },
  },
  media: {
    marginLeft: `-${typography.pxToRem(7.5)}`,
    padding: 0,
    width: "100%",
    [breakpoints.up("md")]: {
      margin: 0,
      width: typography.pxToRem(608),
      "& > div": {
        paddingTop: "100% !important",
      },
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(530 - 37),
      width: typography.pxToRem(768),
    },
    "& > iframe": {
      height: "100%",
    },
  },
  content: {
    marginTop: typography.pxToRem(40),
    width: "100%",
  },
}));

export default useStyles;
