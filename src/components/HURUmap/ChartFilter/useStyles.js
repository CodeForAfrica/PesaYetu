import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    paddingBottom: typography.pxToRem(10),
  },
  grid: {
    [breakpoints.up("md")]: {
      marginRight: typography.pxToRem(10),
    },
  },
  select: {
    width: typography.pxToRem(165),
    paddingLeft: typography.pxToRem(15),
    paddingBottom: typography.pxToRem(10),
    paddingTop: typography.pxToRem(10),
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(185),
    },
  },
  filled: {
    paddingRight: `0 !important`,
  },
}));

export default useStyles;
