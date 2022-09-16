import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(28),
    display: "flex",
    alignItems: "center",
    scrollMarginTop: typography.pxToRem(110),
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(20),
  },
  description: {
    paddingBottom: typography.pxToRem(20),
    "& p": {
      margin: 0,
    },
  },
  icon: {
    position: "relative",
    height: typography.pxToRem(32),
    width: typography.pxToRem(32),
    marginRight: typography.pxToRem(10),
  },
}));

export default useStyles;
