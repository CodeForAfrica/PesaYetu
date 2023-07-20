import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    height: typography.pxToRem(540),
    margin: 0,
    position: "relative",
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  background: {
    position: "absolute",
    height: typography.pxToRem(540),
    width: "100%",
    zIndex: -1,
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  section: {
    zIndex: 1,
    position: "relative",
    paddingTop: `${typography.pxToRem(70)} !important`,
    [breakpoints.up("lg")]: {
      paddingTop: `${typography.pxToRem(100)} !important`,
    },
  },

  textContainer: {
    height: "100%",
    paddingTop: typography.pxToRem(43),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(74),
    },
  },
  overline: {},
  title: {
    marginBottom: typography.pxToRem(10),
  },
  subtitle: {
    marginRight: 0,
    maxWidth: typography.pxToRem(376),
  },
  whiteBackground: {
    position: "absolute",
    left: 0,
    top: typography.pxToRem(70),
    width: "100%",
    height: typography.pxToRem(400),
    background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 87.5%, transparent 87.5%, transparent 100%)`,
    [breakpoints.up("md")]: {
      height: typography.pxToRem(352),
      background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 62.5%, transparent 62.5%, transparent 100%)`,
    },
    [breakpoints.up("lg")]: {
      top: typography.pxToRem(100),
      height: typography.pxToRem(400),
      background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 56%, transparent 56%, transparent 100%)`,
    },
  },
}));

export default useStyles;
