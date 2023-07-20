import makeStyles from "@mui/styles/makeStyles";

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
