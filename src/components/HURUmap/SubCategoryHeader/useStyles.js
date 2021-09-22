import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    borderBottom: `solid 1px ${palette.divider}`,
    paddingBottom: typography.pxToRem(20),
  },
  title: {
    textTransform: "uppercase",
    borderBottom: `solid 1px ${palette.divider}`,
    paddingBottom: typography.pxToRem(20),
  },
  description: {
    marginTop: typography.pxToRem(20),
  },
}));

export default useStyles;
