import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
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
    transition: "width 0.3s linear",
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(600),
    },
  },
  slideIn: {
    width: "calc(100% -250px)",
    height: typography.pxToRem(750),
    [breakpoints.up("md")]: {
      width: "calc(100% - 355px)",
      height: typography.pxToRem(672),
    },
    [breakpoints.up("lg")]: {
      width: "calc(100% - 480px)",
      height: typography.pxToRem(600),
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
    textAlign: "center",
    marginBottom: typography.pxToRem(16),
    [breakpoints.up("lg")]: {
      width: "auto",
      marginLeft: typography.pxToRem(60),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
  },
  slideInIconContainer: {
    [breakpoints.up("lg")]: {
      marginLeft: typography.pxToRem(20),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
  },
  iconRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    backgroundColor: "#0067A3",
    color: "#fff",
    width: typography.pxToRem(250),
    height: typography.pxToRem(528),
    margin: "auto 0",
    display: "flex",
    textAlign: "start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: typography.pxToRem(15),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(355),
      padding: `${typography.pxToRem(50)} ${typography.pxToRem(36)}`,
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(480),
      height: typography.pxToRem(600),
      padding: `${typography.pxToRem(76)} ${typography.pxToRem(84)}`,
    },
  },
  imageContainer: {
    height: typography.pxToRem(88.8),
    width: typography.pxToRem(88.8),
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(140),
      width: typography.pxToRem(140),
    },
  },
  text: {
    display: "inline-flex",
    marginLeft: typography.pxToRem(31),
    fontSize: typography.pxToRem(20),
    width: typography.pxToRem(200),
    [breakpoints.up("lg")]: {
      width: "auto",
      display: "flex",
      textAlign: "center",
      marginTop: typography.pxToRem(20),
    },
  },
  slideInText: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "inline-flex",
    },
  },
  description: {},
}));

export default useStyles;
