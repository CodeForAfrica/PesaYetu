import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  typeContent: {
    background: "#F0F0F0",
    opacity: 1,
    textAlign: "center",
    padding: "12px",
    fontSize: "10px",
    color: "#666666",
    letterSpacing: "0.8px",
    fontWeight: "600",
  },
  title: {
    fontSize: "16px",
    textAlign: "left",
    padding: 0,
  },
  description: {
    fontSize: "11px",
    textAlign: "left",
    padding: 0,
    marginLeft: "0",
    [breakpoints.up("md")]: {
      marginLeft: "-4.5rem",
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
  },
}));

export default useStyles;
