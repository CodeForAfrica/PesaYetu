import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  button: {
    marginRight: typography.pxToRem(10),
    marginTop: typography.pxToRem(7),
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
    minWidth: typography.pxToRem(44),
    backgroundColor: palette.grey.light,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
}));

export default useStyles;
