import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    position: "relative",
    height: typography.pxToRem(390),
    width: "100vw",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(618),
      padding: `${typography.pxToRem(42)} 0`,
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(728),
      padding: `${typography.pxToRem(64)} 0`,
    },
  },
  background: {
    zIndex: -1,
  },
  section: {
    position: "relative",
  },
  video: {
    position: "relative",
    height: typography.pxToRem(227),
    width: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(194),
      width: typography.pxToRem(299),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(244),
      width: typography.pxToRem(376),
    },
    "& .video-js": {
      width: "100%",
      height: "100%",
    },
    "& .vjs-poster": {
      backgroundColor: palette.background.default,
      backgroundSize: "auto",
    },
    "& .video-js .vjs-big-play-button": {
      display: "none",
    },
  },
  visualsGrid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  visuals: {
    position: "absolute",
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
      height: typography.pxToRem(524),
      padding: `${typography.pxToRem(66)} ${typography.pxToRem(
        77
      )} ${typography.pxToRem(69)} 0`,
    },
    [breakpoints.up("lg")]: {
      backgroundColor: palette.background.default,
      opacity: 0.9,
      padding: `${typography.pxToRem(81)} ${typography.pxToRem(98)}`,
    },
  },
  image: {
    fill: palette.primary.main,
    padding: 0,
  },
  title: {
    fontWeight: 900,
    textTransform: "uppercase",
    marginTop: typography.pxToRem(18),
    color: palette.grey.dark,
  },
  description: {
    margin: `${typography.pxToRem(16.5)} 0`,
    color: palette.grey.dark,
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(278),
    },
  },
  tabletWhite: {
    [breakpoints.only("md")]: {
      background: `linear-gradient(to right, #ffffffE6 0%, #ffffffE6 55%, transparent 55%, transparent 100%)`,
      height: typography.pxToRem(524),
    },
  },
}));

export default useStyles;
