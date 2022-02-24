import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ typography, palette, zIndex, breakpoints }) => ({
    root: {},
    dataNotAvail: {
      color: "#666666",
      fontWeight: "bold",
      fontSize: typography.pxToRem(10),
      lineHeight: 16 / 10,
      letterSpacing: typography.pxToRem(0.8),
      margin: `${typography.pxToRem(20)} 0`,
      textTransform: "uppercase",
    },
    locationRoot: {
      scrollMargin: typography.pxToRem(200),
    },
    divider: { display: "none" },
    indicator: { display: "none" },
    tabs: {
      paddingTop: typography.pxToRem(16),
      paddingBottom: typography.pxToRem(16),
      paddingLeft: typography.pxToRem(20),
      backgroundColor: palette.background.paper,
      zIndex: zIndex.appBar,
      width: "100%",
      position: "sticky",
      top: 64, // below navbar
      [breakpoints.up("md")]: {
        paddingLeft: typography.pxToRem(62),
      },
    },
    tabsDivider: {
      display: "none",
    },
    tab: {
      color: "#212529",
      backgroundColor: palette.background.default,
      fontWeight: 500,
      fontSize: typography.pxToRem(12),
      letterSpacing: typography.pxToRem(1.6),
      lineHeight: 30 / 12,
      marginRight: typography.pxToRem(20),
      padding: `${typography.pxToRem(6)} ${typography.pxToRem(20)}`,
      height: typography.pxToRem(29),
      maxWidth: "unset",
      textTransform: "unset",
      "&:last-of-type": {
        marginRight: 0,
      },
    },
    tabIndicator: {
      display: "none",
    },
    tabPanels: {
      marginTop: 0,
    },
    tabSelected: {
      color: palette.background.default,
      backgroundColor: "#666666",
      "&:hover, &:focus, &$selected": {
        color: palette.background.default,
        backgroundColor: "#666666",
      },
    },
    scrollButton: {
      padding: `${typography.pxToRem(58)} ${typography.pxToRem(100)} `,
      backgroundColor: palette.background.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#666666",
      textTransform: "uppercase",
      "&:after": {
        display: "none",
      },
      "&:hover": {
        backgroundColor: palette.background.paper,
        fontWeight: 600,
      },
    },
    topIcon: {
      marginRight: typography.pxToRem(20),
    },
  })
);

export default useStyles;
