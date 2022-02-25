import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    paddingBottom: typography.pxToRem(10),
  },
  grid: {
    [breakpoints.up("md")]: {
      marginRight: typography.pxToRem(10),
    },
  },
  icon: {
    padding: 0,
    background: palette.background.paper,
    "& :hover": {
      background: palette.background.paper,
    },
    height: typography.pxToRem(36),
    width: typography.pxToRem(36),
  },
  select: {
    width: typography.pxToRem(165),
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(185),
    },
  },
  filled: {
    padding: `${typography.pxToRem(10)} 0 ${typography.pxToRem(
      10
    )} ${typography.pxToRem(15)} !important`,
  },
  selectPaper: {
    maxHeight: typography.pxToRem(310),
  },
}));

export default useStyles;
