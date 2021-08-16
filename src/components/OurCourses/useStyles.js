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
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(50),
    position: "unset",
    "& button": {
      borderColor: "#000",
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
      background: "#DFDFDF",
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
      background: "#000",
    },
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(0),
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
