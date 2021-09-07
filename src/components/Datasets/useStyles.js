import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  sources: {
    padding: `${typography.pxToRem(31)} ${typography.pxToRem(0)}`,
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-start !important",
    },
    [breakpoints.up("lg")]: {
      alignItems: "center !important",
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
    padding: "0 !important",
  },
  textContent: {
    [breakpoints.up("md")]: {
      flexDirection: "column !important",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "column !important",
      justifyContent: "flex-start !important",
    },
  },
  linkContent: {
    flexDirection: "column! important",
    justifyContent: "center !important",
    [breakpoints.up("md")]: {
      flexDirection: "column! important",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row !important",
      justifyContent: "space-around !important",
      alignItems: "center !important",
    },
  },
}));

export default useStyles;
