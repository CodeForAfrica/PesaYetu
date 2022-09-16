import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: "#F8F8F8",
  },
  section: {
    paddingTop: typography.pxToRem(60),
    paddingLeft: typography.pxToRem(20),
    paddingRight: typography.pxToRem(20),
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  overline: {},
  title: {
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(30),
    },
    [breakpoints.up("lg")]: {
      marginBottom: typography.pxToRem(80),
    },
  },
  list: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

export default useStyles;
