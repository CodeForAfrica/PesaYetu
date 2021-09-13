import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    width: typography.pxToRem(964),
  },
  tourReact: {
    width: `${typography.pxToRem(1000)}`,
    maxWidth: "100vw  !important",
    top: "50% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
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
