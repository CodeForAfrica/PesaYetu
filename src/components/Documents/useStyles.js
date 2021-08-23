import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "120px",
    background: "#FFFFFF",
    border: "1px solid #DFDFDF",
    opacity: 1,
  },
  text: {
    fontWeight: "500",
    color: "#212529",
  },
  link: {
    fontWeight: "600",
    color: "#0067A3",
  },
}));

export default useStyles;
