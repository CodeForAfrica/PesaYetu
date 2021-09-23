import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    maxWidth: typography.pxToRem(374),
  },
  metric: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(14)} ${typography.pxToRem(20)}`,
  },

  progressBar: {},
  progressBarDeterminate: {
    backgroundColor: palette.grey.main,
  },
  text: {
    fontSize: typography.pxToRem(11),
  },
  title: {
    display: "block",
    marginBottom: typography.pxToRem(8),
  },
  description: {
    padding: `${typography.pxToRem(6)} 0 0 ${typography.pxToRem(20)}`,
    color: "#666666",
  },
}));

export default useStyles;
