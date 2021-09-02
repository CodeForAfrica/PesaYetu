import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
  sources: {},
  title: {},
  description: {
    color: "#707070",
    fontSize: typography.pxToRem(11),
    fontWeight: 300,
    padding: 0,
  },
  text: {
    marginBottom: 0,
  },
  textContent: {
    [breakpoints.up("md")]: {
      flexDirection: "column",
    },
    [breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
  },
  linkContent: {
    flexDirection: "column",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around ",
      alignItems: "center",
    },
  },
}));

export default useStyles;
