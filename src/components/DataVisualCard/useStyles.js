import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "unset",
    maxWidth: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem(376),
    },
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
    height: typography.pxToRem(215),
    position: "relative",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(183),
      width: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(231),
      width: typography.pxToRem(376),
    },
  },
}));

export default useStyles;
