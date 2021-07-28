import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    paddingTop: typography.pxToRem(60),
    "& .highlight": {
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 30%, #0067A31A 50% )",
      display: "inline-block",
    },
  },
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
