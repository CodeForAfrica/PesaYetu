import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.grey.main,
  },
  section: {
    padding: `${typography.pxToRem(60)} ${typography.pxToRem(20)}`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  title: {
    marginBottom: typography.pxToRem(40),
    textAlign: "center",
  },
  dotList: {
    "& button": {
      borderColor: "#000",
      background: palette.grey.main,
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
    },
  },
}));

export default useStyles;
