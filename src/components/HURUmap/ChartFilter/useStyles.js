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
  button: {
    padding: 0,
    background: palette.background.paper,
    "& :hover": {
      background: palette.background.paper,
    },
  },
  icon: {
    height: typography.pxToRem(38),
    width: typography.pxToRem(38),
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
