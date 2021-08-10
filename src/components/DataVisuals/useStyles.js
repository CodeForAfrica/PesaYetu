import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {},
  title: {
    fontWeight: 900,
    textTransform: "uppercase",
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.only("md")]: {
      paddingTop: typography.pxToRem(80),
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
      borderColor: palette.divider,
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#A0A0A0",
      background: "#000",
    },
  },
}));

export default useStyles;
