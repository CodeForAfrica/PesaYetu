import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    margin: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(80)} 0`,
    },
  },
  cardRoot: {
    boxShadow: "none",
    backgroundColor: "unset",
    maxWidth: typography.pxToRem(350),
    padding: `0 ${typography.pxToRem(20)}`,
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(296),
      marginRight: typography.pxToRem(16),
      padding: 0,
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(376),
    },
  },
  cardMedia: {
    height: typography.pxToRem(278),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(278),
      width: typography.pxToRem(278),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(278),
      width: typography.pxToRem(278),
    },
  },
  title: {
    fontWeight: 900,
    textAlign: "center",
    textTransform: "uppercase",
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
    },
  },
  section: {
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
    },
  },
  container: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
    paddingTop: `${typography.pxToRem(40)}`,
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
  },
}));

export default useStyles;
