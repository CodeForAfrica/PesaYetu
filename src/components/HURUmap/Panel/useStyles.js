import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ typography, palette, transitions, widths, zIndex }) => ({
    root: {
      display: "flex",
      height: "100%",
      scrollBehavior: "smooth",
    },
    drawerOpen: {
      minWidth: typography.pxToRem(1049),
      maxWidth: "max-content",
      transition: transitions.create("width", {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: transitions.create("width", {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: typography.pxToRem(44),
    },
    paper: {
      background: "transparent",
      border: "none",
      display: "flex",
      flexDirection: "row",
      position: "unset",
      width: "100%",
      overflowY: "visible",
    },
    panelButtons: {
      marginTop: typography.pxToRem(113),
      width: typography.pxToRem(44),
      position: "fixed",
      left: 0,
    },
    panelButtonsOpen: {
      left: `calc((100vw - ${widths.values.lg}px)/2 + 754px)`,
    },
    tabPanel: {
      width: `calc(100% - ${typography.pxToRem(44)})`,
      height: "100%",
      background: palette.background.default,
      display: "flex",
    },
    treeView: {
      width: `calc((100vw - ${widths.values.lg}px)/2)`,
      minWidth: typography.pxToRem(300),
      paddingTop: typography.pxToRem(76),
      flexShrink: 0,
      top: typography.pxToRem(110),
      bottom: 0,
      position: "fixed",
      left: 0,
    },
    panelMain: {
      marginLeft: `calc((100vw - ${widths.values.lg}px)/2)`,
      width: typography.pxToRem(800),
      paddingTop: typography.pxToRem(67.7),
      paddingLeft: typography.pxToRem(17),
      paddingRight: typography.pxToRem(17),
      zIndex: zIndex.drawer,
    },
  })
);

export default useStyles;
