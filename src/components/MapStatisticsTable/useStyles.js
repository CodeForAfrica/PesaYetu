import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "100%",
    top: "16px",
    bottom: "auto",
    zIndex: 999,
    display: "flex",
    padding: "8px",
    height: "10rem",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "4px",
    backgroundColor: "rgb(255, 255, 255, 0.2)",
    boxShadow: "0 0 0 -1px rgb(0 0 0 / 20%), 0 1px 6px -2px rgb(0 0 0 / 30%)",
    transition: "all .4s ease",
    "&:hover": {
      backgroundColor: "rgb(255, 255, 255, 1)",
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
    color: "#666",
    fontSize: "0.6em",
    lineHeight: "100%",
    textAlign: "center",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "1rem",
  },
  number: {
    textTransform: "uppercase",
    alignSelf: "stretch",
    fontSize: "1.2rem",
    fontWeight: 500,
    textAlign: "center",
  },
}));

export default useStyles;
