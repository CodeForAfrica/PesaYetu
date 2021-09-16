import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  title: {
    fontSize: typography.pxToRem(28),
    display: "flex",
    alignItems: "center",
  },

  description: {},
  svgIcon: {
    "&.MuiSvgIcon-root": {
      width: typography.pxToRem(44),
      height: typography.pxToRem(44),
    },
  },
}));

export default useStyles;
