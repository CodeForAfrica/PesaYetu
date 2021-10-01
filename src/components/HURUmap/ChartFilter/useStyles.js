import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  select: {
    width: typography.pxToRem(156),
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(200),
    },
  },
}));

export default useStyles;
