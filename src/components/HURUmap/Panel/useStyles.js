import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ typography, palette, transitions, widths }) => ({
    root: {
      position: "absolute",
      display: "flex",
      height: "calc(100vh - 110px)",
    },
    drawerOpen: {
      minWidth: typography.pxToRem(1049),
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
      overflow: "visible",
      display: "flex",
      flexDirection: "row",
      position: "unset",
      width: "100%",
    },
    panelButtons: {
      marginTop: typography.pxToRem(113),
      width: typography.pxToRem(44),
    },
    tabPanel: {
      width: `calc(100% - ${typography.pxToRem(44)})`,
      height: "100%",
      background: palette.background.default,
      overflow: "hidden",
      display: "flex",
    },
    treeView: {
      width: `calc((100vw - ${widths.values.lg}px)/2)`,
      minWidth: typography.pxToRem(300),
      minHeight: "100%",
      paddingTop: typography.pxToRem(76),
      flexShrink: 0,
    },
    panelMain: {
      width: typography.pxToRem(800),
      paddingTop: typography.pxToRem(67.7),
      paddingLeft: typography.pxToRem(17),
      paddingRight: typography.pxToRem(17),
      scrollBehavior: "smooth",
      overflowY: "scroll",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        width: 0 /* Remove scrollbar space */,
        background: "transparent" /* Optional: just make scrollbar invisible */,
      },
    },
  })
);

export default useStyles;
