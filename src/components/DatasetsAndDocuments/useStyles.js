import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    padding: `${typography.pxToRem(38)} 0`,
  },
  section: {
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
  sources: {
    padding: `${typography.pxToRem(31)} ${typography.pxToRem(0)}`,
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    [breakpoints.up("lg")]: {
      alignItems: "center",
      padding: `${typography.pxToRem(31)} ${typography.pxToRem(100)}`,
    },
  },
  title: {
    fontSize: typography.pxToRem(16),
    padding: 0,
    fontWeight: "500",
  },
  description: {
    color: "#707070",
    fontSize: typography.pxToRem(11),
    padding: 0,
  },
  text: {
    padding: 0,
  },
  textContent: {
    flexDirection: "column ",
  },
  linkContent: {
    flexDirection: "column",
    justifyContent: "center ",
    [breakpoints.up("md")]: {
      flexDirection: "column",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row ",
      justifyContent: "space-around ",
      alignItems: "center ",
    },
  },
}));

export default useStyles;
