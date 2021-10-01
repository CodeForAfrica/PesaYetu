import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
  },
  title: {
    fontSize: typography.pxToRem(28),
    display: "flex",
    alignItems: "center",
    scrollMarginTop: typography.pxToRem(110),
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(20),
  },
  description: {
    paddingBottom: typography.pxToRem(20),
    "& p": {
      margin: 0,
    },
  },
  icon: {
    position: "relative",
    height: typography.pxToRem(55.5),
    width: typography.pxToRem(55.5),
  },
}));

export default useStyles;
