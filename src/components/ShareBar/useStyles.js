import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
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
    marginLeft: typography.pxToRem(1),
  },
  copied: {
    padding: `0 ${typography.pxToRem(16)}`,
  },
  copyButton: {
    padding: 0,
    background: "#f8f8f8",
    borderRadius: 0,
    textTransform: "none",
    height: typography.pxToRem(48),
    width: typography.pxToRem(48),
    "&:hover": {
      background: palette.background.paper,
      borderRadius: 0,
      border: 0,
      fontWeight: "bold",
    },
    "&::after": {
      display: "none",
    },
    "&:hover::after": {
      display: "none",
    },
  },
}));

export default useStyles;
