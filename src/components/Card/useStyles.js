import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
    borderRadius: 0,
  },
  cardMedia: {},
  insightViz: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px 10px #0000001A",
  },
  focusHighlight: {
    background: "transparent",
  },
  focusVisible: {},
  cardActionRoot: {},
  content: {
    padding: 0,
  },
  image: {
    objectFit: "contain !important",
  },
}));

export default useStyles;
