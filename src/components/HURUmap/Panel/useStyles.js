import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, transitions }) => ({
  root: {
    position: "absolute",
    display: "flex",
    height: "90vh",
  },
  section: {
    width: "100%",
  },
  drawerOpen: {
    minWidth: typography.pxToRem(1049),
    width: `calc(56vw + ${typography.pxToRem(344)})`,
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
    width: typography.pxToRem(300),
    minHeight: "100%",
    paddingTop: typography.pxToRem(76),
    flexShrink: 0,
  },
  panelMain: {
    width: "100%",
    paddingTop: typography.pxToRem(67.7),
    paddingLeft: typography.pxToRem(17),
    paddingRight: typography.pxToRem(17),
    scrollingBehaviour: "smooth",
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: 0 /* Remove scrollbar space */,
      background: "transparent" /* Optional: just make scrollbar invisible */,
    },
  },
}));

export default useStyles;
