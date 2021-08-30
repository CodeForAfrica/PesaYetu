import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(16),
    textAlign: "left",
    padding: 0,
    fontWeight: "500",
  },
  description: {
    color: "#707070",
    fontSize: typography.pxToRem(11),
    textAlign: "left",
    padding: 0,
  },
  dataTypes: {},
  textContent: {
    /*   flexDirection: "column !important",
    justifyContent: "flex-start !important",
    alignItems: "center !important",
    [breakpoints.up("md")]: {
      justifyContent: "center !important",
      flexDirection: "column !important",
      alignItems: "center !important",
    }, */
    [breakpoints.up("lg")]: {
      flexDirection: "column !important",
      justifyContent: "flex-start !important",
    },
  },
  linkContent: {
    /* flexDirection: "column! important",
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "2rem! important",
    [breakpoints.up("md")]: {
      flexDirection: "column! important",
    }, */
    [breakpoints.up("lg")]: {
      flexDirection: "row !important",
      justifyContent: "space-around !important",
      alignItems: "center !important",
    },
  },
}));

export default useStyles;
