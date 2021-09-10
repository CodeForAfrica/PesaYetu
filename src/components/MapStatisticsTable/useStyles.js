import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "16px",
    bottom: "auto",
    zIndex: 999,
    display: "flex",
    padding: "8px",
    width: "100%",
    height: "7rem",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "4px",
    backgroundColor: "hsla(0,0%,100%,.63)",
    boxShadow: "0 0 0 -1px rgb(0 0 0 / 20%), 0 1px 6px -2px rgb(0 0 0 / 30%)",
    transition: "all .4s ease",
  },
  locationInfo: {
    margin: "0rem 4rem",
    borderTop: "1px solid black",
  },
  title: {
    textAlign: "center",
  },
  middleItem: {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
  },
}));

export default useStyles;
