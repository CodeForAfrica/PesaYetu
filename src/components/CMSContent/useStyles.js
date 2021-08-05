import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.light,
  },
  section: {
    marginBottom: typography.pxToRem(80),
  },
  container: {
    [breakpoints.up("md")]: {
      margin: typography.pxToRem(0),
    },
    "& p strong:only-child": {
      marginTop: typography.pxToRem(80),
      display: "block",
    },
    "& h1": {
      fontSize: typography.pxToRem(50),
      lineHeight: 66 / 50,
      fontWeight: "300",
    },
    "& .has-medium-font-size": {
      fontSize: typography.pxToRem(20),
      lineHeight: 30 / 20,
      fontWeight: "normal",
    },
    "& p": {
      paddingTop: typography.pxToRem(24),
    },
    "& img": {
      width: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      height: "auto",
    },
    "& .wp-block-columns": {
      display: "flex",
      flexDirection: "column",
      [breakpoints.up("lg")]: {
        flexDirection: "row",
      },
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
