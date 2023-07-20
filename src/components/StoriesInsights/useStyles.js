import { alpha } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

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
      padding: `${typography.pxToRem(8)} ${typography.pxToRem(33)}`,
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
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(768),
    },
  },
  content: {
    marginTop: typography.pxToRem(40),
    width: "100%",
  },
  contentDescription: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
  },
}));

export default useStyles;
