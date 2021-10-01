import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ typography, palette, zIndex, breakpoints }) => ({
    root: {},
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
      position: "sticky",
      [breakpoints.up("md")]: {
        paddingLeft: typography.pxToRem(62),
      },
    },
    tabPanels: {
      marginTop: 0,
    },
    profile: {
      marginLeft: typography.pxToRem(20),
      marginRight: typography.pxToRem(20),
      marginTop: typography.pxToRem(20),
      [breakpoints.up("md")]: {
        paddingLeft: typography.pxToRem(80),
        marginRight: typography.pxToRem(80),
      },
    },
    footer: {
      padding: `${typography.pxToRem(58)} ${typography.pxToRem(100)} `,
      backgroundColor: palette.background.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#666666",
    },
    footerIcon: {
      marginRight: typography.pxToRem(20),
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
    tabSelected: {
      color: palette.background.default,
      backgroundColor: "#666666",
      "&:hover, &:focus, &$selected": {
        color: palette.background.default,
        backgroundColor: "#666666",
      },
    },
  })
);

export default useStyles;
