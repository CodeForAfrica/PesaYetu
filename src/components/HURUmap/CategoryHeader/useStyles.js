import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  heading: {
    fontSize: typography.pxToRem(28),
  },
  image: {
    position: "relative",
    height: typography.pxToRem(55.5),
    width: typography.pxToRem(55.5),
  },
  description: {
    fontWeight: "400",
  },
}));

export default useStyles;
