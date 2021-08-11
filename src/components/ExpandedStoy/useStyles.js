import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  headerRoot: {
    backgroundColor: palette.background.paper,
    margin: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(60)} 0`,
    },
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(100)} 0 ${typography.pxToRem(100)}`,
    },
  },
  contentRoot: {
    backgorundColor: palette.background.default,
  },
  overline: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(14),
    marginBottom: typography.pxToRem(13),
    textTransform: "uppercase",
  },
  title: {
    margin: `${typography.pxToRem(20)} 0`,
  },
  date: {
    marginBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(46),
    },
  },
  image: {
    position: "relative",
    height: typography.pxToRem(222),
    width: "100%",
    marginBottom: typography.pxToRem(20),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(320),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(792),
      height: typography.pxToRem(526),
    },
  },
  content: {
    marginTop: typography.pxToRem(20),
  },
}));

export default useStyles;
