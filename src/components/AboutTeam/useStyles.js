import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  title: {
    textAlign: "center",
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
    },
  },
  dotList: {
    "& button": {
      borderColor: "#000",
      background: palette.background.paper,
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
    },
  },
}));

export default useStyles;
