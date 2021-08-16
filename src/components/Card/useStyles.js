import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {},
  actionArea: {
    color: "#333333;",
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  cardMedia: {},
  content: {
    padding: 0,
  },
  image: {
    objectFit: "contain",
  },
}));

export default useStyles;
