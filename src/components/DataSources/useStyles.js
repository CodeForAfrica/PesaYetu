import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    background: palette.grey.light,
  },
  section: {},
  title: {
    marginTop: typography.pxToRem(93),
    marginBottom: typography.pxToRem(40),
  },
  link: {
    fontWeight: "bold",
    marginBottom: typography.pxToRem(10),
  },
}));

export default useStyles;
