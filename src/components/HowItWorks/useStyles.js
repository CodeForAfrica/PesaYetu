import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    height: typography.pxToRem(820),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(618),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(728),
    },
  },
  background: {
    position: "absolute",
    height: typography.pxToRem(390),
    width: "100%",
    zIndex: -1,
    [breakpoints.up("md")]: {
      height: typography.pxToRem(618),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(728),
    },
  },
  section: {
    zIndex: 1,
    position: "relative",
    paddingTop: typography.pxToRem(62),
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(42)} 0`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(64)} 0`,
    },
  },
  video: {
    position: "relative",
    height: typography.pxToRem(227),
    width: "100%",
    "& .video-js": {
      width: "100%",
      height: "100%",
    },
    "& .vjs-poster": {
      backgroundColor: "#ffffffE6",
      backgroundSize: "120%",
    },
    "& .video-js .vjs-big-play-button": {
      display: "none",
    },
    [breakpoints.up("md")]: {
      height: typography.pxToRem(194),
      width: typography.pxToRem(299),
      "& .vjs-poster": {
        backgroundSize: "auto",
      },
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(244),
      width: typography.pxToRem(376),
    },
  },
  visualsGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: typography.pxToRem(23),
    [breakpoints.up("md")]: {
      justifyContent: "flex-end",
      marginBottom: 0,
    },
  },
  visuals: {
    position: "relative",
    height: typography.pxToRem(265),
    width: typography.pxToRem(253.6),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(211),
      width: typography.pxToRem(202),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(441.6),
      width: typography.pxToRem(422.5),
    },
  },
  content: {
    [breakpoints.up("md")]: {
      position: "relative",
      top: 0,
      height: typography.pxToRem(524),
      padding: `${typography.pxToRem(66)} ${typography.pxToRem(
        77
      )} ${typography.pxToRem(69)} 0`,
    },
    [breakpoints.up("lg")]: {
      backgroundColor: palette.background.default,
      height: typography.pxToRem(600),
      opacity: 0.9,
      padding: `${typography.pxToRem(81)} ${typography.pxToRem(98)}`,
    },
  },
  title: {
    fontWeight: 900,
    textTransform: "uppercase",
    marginTop: typography.pxToRem(18),
    color: palette.grey.dark,
  },
  description: {
    fontFamily: typography.body1.fontFamily,
    margin: `${typography.pxToRem(16.5)} 0`,
    color: palette.grey.dark,
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(278),
    },
  },
  tabletWhite: {
    position: "absolute",
    left: 0,
    top: typography.pxToRem(42),
    width: "100%",
    background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 56%, transparent 56%, transparent 100%)`,
    height: typography.pxToRem(524),
  },
}));

export default useStyles;
