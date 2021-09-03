import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    marginBottom: typography.pxToRem(80),
  },
  carouselItem: {
    margin: `${typography.pxToRem(40)} 0 ${typography.pxToRem(10)}`,
    [breakpoints.up("lg")]: {
      margin: `${typography.pxToRem(60)} 0`,
    },
  },
  story: {
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(40),
    },
  },
}));

export default useStyles;
