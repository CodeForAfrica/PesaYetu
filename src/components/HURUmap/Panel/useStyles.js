import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
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
  tabPanel: {
    minWidth: typography.pxToRem(1005),
    background: palette.background.default,
    minHeight: "90vh",
    display: "flex",
  },
  treeView: {
    width: typography.pxToRem(205),
    minHeight: "100%",
    paddingTop: typography.pxToRem(76),
  },
}));

export default useStyles;
