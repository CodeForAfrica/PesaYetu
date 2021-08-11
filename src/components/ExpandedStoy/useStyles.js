import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  headerRoot: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(60)} 0`,
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(100)} 0 ${typography.pxToRem(73)}`,
    },
  },
  contentRoot: {
    backgorundColor: palette.background.default,
    padding: `${typography.pxToRem(60)} 0 ${typography.pxToRem(80)}`,
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(40),
    },
  },
  title: {
    margin: `${typography.pxToRem(20)} 0`,
  },
  displayFlex: {
    display: "flex",
  },
  image: {
    position: "relative",
    height: typography.pxToRem(217),
    width: "100%",
    marginBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(320),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(768),
      height: typography.pxToRem(476),
    },
  },
  content: {
    marginTop: typography.pxToRem(20),
  },
}));

export default useStyles;
