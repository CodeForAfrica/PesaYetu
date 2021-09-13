import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  image: {
    position: "relative",
    height: typography.pxToRem(44.4),
    width: typography.pxToRem(44.4),
  },
  description: {
    padding: `${typography.pxToRem(20)} 0`,
    fontWeight: 400,
  },
}));

export default useStyles;
