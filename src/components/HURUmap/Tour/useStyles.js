import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    width: typography.pxToRem(964),
  },

  lineContainer: {
    position: "fixed",
    zIndex: 9999999,
    pointerEvents: "none",
  },
  line: {
    strokeWidth: typography.pxToRem(1),
    stroke: palette.primary.main,
    fill: palette.primary.main,
  },
}));

export default useStyles;
