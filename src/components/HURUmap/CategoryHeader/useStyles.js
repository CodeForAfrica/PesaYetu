import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  heading: {
    fontSize: typography.pxToRem(28), // no available header font of this size
  },
  image: {
    position: "relative",
    height: typography.pxToRem(55.5),
    width: typography.pxToRem(55.5),
  },
  description: {},
}));

export default useStyles;
