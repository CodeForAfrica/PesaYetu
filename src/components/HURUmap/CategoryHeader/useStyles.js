import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(28),
    display: "flex",
    alignItems: "center",
  },
  description: {},
  icon: {
    position: "relative",
    height: typography.pxToRem(55.5),
    width: typography.pxToRem(55.5),
  },
}));

export default useStyles;
