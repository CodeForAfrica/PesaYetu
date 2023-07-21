import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: typography.pxToRem(20),
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
  source: {
    marginTop: typography.pxToRem(10),
  },
  text: {
    fontSize: typography.pxToRem(11),
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    marginBottom: typography.pxToRem(8),
  },
  description: {
    padding: `${typography.pxToRem(6)} 0 0 ${typography.pxToRem(20)}`,
    color: "#666666",
  },
}));

export default useStyles;
