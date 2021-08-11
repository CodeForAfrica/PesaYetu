import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "unset",
    maxWidth: typography.pxToRem(350),
    padding: `0 ${typography.pxToRem(20)}`,
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(296),
      marginRight: typography.pxToRem(16),
      padding: 0,
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(376),
    },
  },
  title: {
    marginTop: typography.pxToRem(20),
  },

  content: {
    padding: 0,
    marginTop: typography.pxToRem(20),
    "& .bold": {
      [breakpoints.up("lg")]: {
        fontWeight: "bold",
      },
    },
  },
  cardMedia: {
    height: typography.pxToRem(278),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(278),
      width: typography.pxToRem(278),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(278),
      width: typography.pxToRem(278),
    },
  },
}));

export default useStyles;
