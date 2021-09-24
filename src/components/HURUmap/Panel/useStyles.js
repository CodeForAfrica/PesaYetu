import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  paper: {
    background: "transparent",
    border: "none",
    visibility: "visible !important",
    overflow: "visible",
    position: "relative",
  },
  panelButtons: {
    position: "absolute",
    right: 0,
    top: typography.pxToRem(214),
    transform: `translateX(${typography.pxToRem(44)})`,
    width: typography.pxToRem(44),
  },
}));

export default useStyles;
