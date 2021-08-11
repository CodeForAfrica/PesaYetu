import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    display: "flex",
  },
  children: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: typography.pxToRem(20),
    fontSize: typography.pxToRem(16),
  },
  tooltip: {
    marginTop: 0,
    backgroundColor: palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
  icon: {
    padding: typography.pxToRem(14),
    fill: palette.primary.main, // temporary until we get correct icons
    background: palette.background.light,
    height: typography.pxToRem(43),
    width: typography.pxToRem(43),
    marginRight: typography.pxToRem(1),
    cursor: "pointer",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(48),
      width: typography.pxToRem(48),
    },
  },
}));

export default useStyles;
