import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    height: typography.pxToRem(600),
    margin: 0,
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(400),
    },
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: typography.pxToRem(600),
    width: "100%",
    zIndex: -1,
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(400),
    },
  },
  section: {
    zIndex: 1,
    height: "100%",
  },
  content: {
    marginTop: typography.pxToRem(169),
    marginBottom: typography.pxToRem(149),
    background: palette.background.default,
    padding: `${typography.pxToRem(58)} ${typography.pxToRem(
      26
    )} ${typography.pxToRem(28)}`,

    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(55),
      marginBottom: typography.pxToRem(55),
      padding: `${typography.pxToRem(58)} ${typography.pxToRem(98)}`,
    },
  },
  title: {
    marginBottom: typography.pxToRem(20),
  },
  subtitle: {
    marginBottom: typography.pxToRem(20),
  },
}));

export default useStyles;
