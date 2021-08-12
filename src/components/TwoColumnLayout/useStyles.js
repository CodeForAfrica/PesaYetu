import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {},
  section: {
    marginBottom: typography.pxToRem(80),
    backgroundColor: palette.background.light,
  },
  title: {
    fontSize: typography.pxToRem(50),
    lineHeight: 66 / 50,
    marginBottom: typography.pxToRem(40),
    fontWeight: "300",
  },
  subtitle: {
    fontWeight: "normal",
    marginBottom: typography.pxToRem(40),
  },
  container: {
    [breakpoints.up("md")]: {
      margin: typography.pxToRem(0),
    },
    "& p": {
      paddingBottom: typography.pxToRem(24),
      marginTop: 0,
    },
    "& img": {
      width: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      height: "auto",
    },
    "& .wp-block-image": {
      width: "100%",
      maxWidth: "100%",
      margin: 0,
      marginTop: typography.pxToRem(20),
      marginBottom: typography.pxToRem(20),
    },
  },
}));

export default useStyles;
