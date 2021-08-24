import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: "#F0F0F0",
    height: typography.pxToRem(672),
    position: "relative",
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  section: {
    display: "flex",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  indicatorsContainer: {
    width: "100%",
    height: typography.pxToRem(672),
    transition: "width 0.3s ease-in-out",
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  slideIn: {
    [breakpoints.up("md")]: {
      width: "calc(100% - 355px)",
    },
    [breakpoints.up("lg")]: {
      width: "calc(100% - 480px)",
    },
  },
  header: {
    width: "100%",
    textAlign: "center",
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(102)} 0 ${typography.pxToRem(80)}`,
    },
  },
  align: {
    textAlign: "center",
  },
  iconContainer: {
    width: "100%",
    marginBottom: typography.pxToRem(16),
    display: "flex",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      display: "initial",
      width: "auto",
      marginRight: typography.pxToRem(60),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
  },
  slideInIconContainer: {
    [breakpoints.up("lg")]: {
      marginRight: typography.pxToRem(20),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
  },
  iconRoot: {
    display: "flex",
    [breakpoints.up("lg")]: {
      display: "block",
    },
  },
  slide: {
    backgroundColor: palette.primary.main,
    position: "absolute",
    right: 0,
    top: typography.pxToRem(110),
    color: palette.text.secondary,
    width: `92%`,
    height: typography.pxToRem(528),
    margin: "auto 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: typography.pxToRem(15),
    [breakpoints.up("md")]: {
      top: typography.pxToRem(80),
      width: typography.pxToRem(355),
      padding: `${typography.pxToRem(50)} ${typography.pxToRem(36)}`,
    },
    [breakpoints.up("lg")]: {
      top: 0,
      width: typography.pxToRem(480),
      height: typography.pxToRem(600),
      padding: `${typography.pxToRem(76)} ${typography.pxToRem(84)}`,
    },
  },
  image: {
    position: "relative",
    height: typography.pxToRem(88.8),
    width: typography.pxToRem(88.8),
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(140),
      width: typography.pxToRem(140),
    },
  },
  text: {
    display: "flex",
    marginLeft: typography.pxToRem(31),
    fontSize: typography.pxToRem(20),
    width: typography.pxToRem(200),
    [breakpoints.up("lg")]: {
      width: "auto",
      display: "block",
      margin: `${typography.pxToRem(20)} auto 0`,
    },
  },
  title: { color: "inherit" },
  description: { lineHeight: 30 / 16, textAlign: "initial" },
}));

export default useStyles;
