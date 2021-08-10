import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: "#DFDFDF",
  },
  section: {
    paddingTop: typography.pxToRem(60),
    paddingLeft: typography.pxToRem(20),
    paddingRight: typography.pxToRem(20),
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  title: {
    fontWeight: "900",
    fontSize: typography.pxToRem(20),
    marginBottom: typography.pxToRem(40),
    textTransform: "uppercase",
    textAlign: "center",
  },

  list: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

export default useStyles;
