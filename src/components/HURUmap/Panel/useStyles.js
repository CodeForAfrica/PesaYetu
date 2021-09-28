import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    width: typography.pxToRem(1005),
    position: "absolute",
    display: "flex",
  },
  paper: {
    background: "transparent",
    border: "none",
    visibility: "visible !important",
    overflow: "visible",
    position: "relative",
    width: "100%",
  },
  panelButtons: {
    position: "absolute",
    right: 0,
    top: typography.pxToRem(113),
    transform: `translateX(${typography.pxToRem(44)})`,
    width: typography.pxToRem(44),
  },
  tabPanel: {
    width: "100%",
    background: palette.background.default,
    height: "90vh",
    overflow: "hidden",
    display: "flex",
  },
  treeView: {
    width: typography.pxToRem(300),
    minHeight: "100%",
    paddingTop: typography.pxToRem(76),
    flexShrink: 0,
  },
  panelMain: {
    paddingTop: typography.pxToRem(67.7),
    paddingLeft: typography.pxToRem(17),
    paddingRight: typography.pxToRem(17),
    overflowY: "scroll",
  },
}));

export default useStyles;
