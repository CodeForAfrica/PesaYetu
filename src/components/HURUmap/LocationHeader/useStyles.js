import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
  },
  titleContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    borderBottom: `solid 5px ${palette.primary.main}`,
    marginBottom: typography.pxToRem(20),
  },
  description: {
    textTransform: "uppercase",
    borderBottom: `solid 1px ${palette.divider}`,
    paddingBottom: typography.pxToRem(10),
  },
  icon: {
    position: "relative",
    height: typography.pxToRem(20),
    minWidth: typography.pxToRem(20),
  },
  button: {
    borderRadius: "50%",
    backgroundColor: palette.grey.light,
    width: typography.pxToRem(44),
    height: typography.pxToRem(44),
    minWidth: typography.pxToRem(44),
    boxShadow: "none",
  },
}));

export default useStyles;
