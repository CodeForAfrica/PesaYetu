import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    height: typography.pxToRem(540),
    margin: 0,
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(600),
    },
  },
  background: {
    position: "absolute",
    height: typography.pxToRem(540),
    width: "100%",
    zIndex: -1,
    [breakpoints.up("md")]: {
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
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(74),
    },
  },
  intro: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  title: {
    marginBottom: typography.pxToRem(20),
    fontWeight: "bold",
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(40),
    },
    "& .highlight": {
      display: "inline-block",
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 30%, #0067A31A 50% )",
    },
  },
  tagline: {
    marginRight: 0,
    maxWidth: typography.pxToRem(376),
  },
  whiteBackground: {
    position: "absolute",
    left: 0,
    top: typography.pxToRem(70),
    width: "100%",
    background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 87.5%, transparent 87.5%, transparent 100%)`,

    height: typography.pxToRem(400),
    [breakpoints.up("lg")]: {
      top: typography.pxToRem(100),

      background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 56%, transparent 56%, transparent 100%)`,
    },
  },
}));

export default useStyles;
