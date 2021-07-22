import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: { paddingTop: typography.pxToRem(60) },
  title: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(14),
    marginBottom: typography.pxToRem(13),
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: typography.pxToRem(30),
    fontWeight: "900",
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      fontSize: typography.pxToRem(48),
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

export default useStyles;
