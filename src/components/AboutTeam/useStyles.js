import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  cardRoot: {
    boxShadow: "none",
    backgroundColor: "unset",
  },
  cardMedia: {
    height: typography.pxToRem(278),
    width: typography.pxToRem(278),
    position: "relative",
  },
  title: {
    textAlign: "center",
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
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
      background: palette.background.paper,
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
      background: "#000",
    },
  },
}));

export default useStyles;
