import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, zIndex }) => ({
  root: {},
  divider: { display: "none" },
  indicator: { display: "none" },
  tabs: {
    paddingTop: typography.pxToRem(16),
    paddingBottom: typography.pxToRem(31),
    paddingLeft: typography.pxToRem(20),
    backgroundColor: "#F8F8F8",
    zIndex: zIndex.appBar,
    position: "sticky",
    top: 0,
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
    },
  },
  profile: {
    marginLeft: typography.pxToRem(20),
    marginRight: typography.pxToRem(20),
  },
}));

export default useStyles;
