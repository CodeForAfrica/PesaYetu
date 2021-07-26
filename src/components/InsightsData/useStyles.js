import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: { paddingTop: typography.pxToRem(60) },
  title: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(14),
    marginBottom: typography.pxToRem(13),
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: typography.pxToRem(30),
    fontWeight: "900",
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(30),
    },
    [breakpoints.up("lg")]: {
      marginBottom: typography.pxToRem(80),
      fontSize: typography.pxToRem(48),
    },
  },
  subtitleTwo: {
    position: "relative",
    display: "inline-block",

    "&::before": {
      content: "''",
      borderBottom: "30px solid #0067A31A",
      width: "100%",
      position: "absolute",
      right: 0,
      top: "30%",
      zIndex: "-1",
      [breakpoints.up("md")]: {
        top: "40%",
      },
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

export default useStyles;
