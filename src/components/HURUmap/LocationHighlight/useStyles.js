import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(10),
    fontWeight: 300,
    lineHeight: 24 / 10,
    textTransform: "uppercase",
  },
  value: {},
}));

export default useStyles;
