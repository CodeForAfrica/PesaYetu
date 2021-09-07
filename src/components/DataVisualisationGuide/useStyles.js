import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    padding: `${typography.pxToRem(40)} 0`,
  },
  section: {},
  title: {},
  card: {
    marginTop: typography.pxToRem(40),
  },
  cardContentDescription: {
    "& .bold": {
      fontWeight: "bold",
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
