import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(16),
    textAlign: "left",
    padding: 0,
  },
  description: {
    fontSize: typography.pxToRem(11),
    textAlign: "left",
    padding: 0,
    marginLeft: "0",
    [breakpoints.up("lg")]: {
      marginLeft: typography.pxToRem(-72),
    },
  },
  dataTypes: {},
  textContent: {
    flexDirection: "column !important",
    justifyContent: "flex-start !important",
    alignItems: "center !important",
    [breakpoints.up("md")]: {
      flexDirection: "column !important",
      justifyContent: "center !important",
      alignItems: "center !important",
    },
  },
  linkContent: {
    flexDirection: "column",
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "2rem! important",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row !important",
      justifyContent: "space-evenly !important",
      alignItems: "center !important",
    },
  },
}));

export default useStyles;
