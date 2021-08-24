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
}));

export default useStyles;
