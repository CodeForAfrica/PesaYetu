import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  dataSection: {
    backgroundColor: palette.background.paper,
    maxWidth: typography.pxToRem(374),
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(
      20
    )} ${typography.pxToRem(14)} ${typography.pxToRem(20)}`,
  },

  progressBar: {
    "& .MuiLinearProgress-colorPrimary, .MuiLinearProgress-colorSecondary": {
      backgroundColor: palette.grey.main,
    },
  },
  description: {
    display: "block",
    marginBottom: typography.pxToRem(8),
  },
  text: {
    fontSize: typography.pxToRem(11),
  },
  summary: {
    padding: `${typography.pxToRem(6)} 0 0 ${typography.pxToRem(20)}`,
    color: "#666666",
  },
}));

export default useStyles;
