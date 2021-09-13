import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  paper: {
    position: "absolute",
    width: "600px",
    top: "16px",
    bottom: "auto",
    zIndex: 999,
    display: "flex",
    padding: "8px",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "5px",
    opacity: 1,
    backgroundColor: "#FFFFFFE6",
    boxShadow: "0px 3px 6px #00000029",
    transition: "all .4s ease",
    [breakpoints.up("md")]: {
      left: "5rem",
    },
    [breakpoints.up("lg")]: {
      left: "40rem",
    },
  },
  locationTags: {
    padding: "0.3rem 0rem",
  },
  locationInfo: {
    margin: "0rem 4rem",
    borderTop: "1px solid rgba(0,0,0,.15)",
  },
  middleItem: {
    borderRight: "1px solid rgba(0,0,0,.15)",
    borderLeft: "1px solid rgba(0,0,0,.15)",
  },
  name: {
    alignSelf: "stretch",
    fontSize: "10px",
    fontWeight: 300,
    lineHeight: "100%",
    textAlign: "center",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "1rem",
    color: "#333333",
    opacity: 1,
  },
  number: {
    textTransform: "uppercase",
    alignSelf: "stretch",
    fontWeight: 500,
    textAlign: "center",
    fontSize: "14px",
    color: "#333333",
    opacity: 1,
  },
}));

export default useStyles;
