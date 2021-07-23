import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  card: {
    minWidth: typography.pxToRem(350),
    [breakpoints.up("md")]: {
      minWidth: typography.pxToRem(296),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(356),
      maxHeight: typography.pxToRem(400),
    },
    "& .MuiCardContent-root:last-child": {
      padding: 0,
    },
    boxShadow: "none",
    backgroundColor: "unset",
  },
  cardMedia: {
    height: typography.pxToRem(220),
    backgroundSize: "auto",
    marginLeft: "-10px !important",
    position: "relative",
  },
  title: {
    marginTop: typography.pxToRem(20),
    marginBottom: typography.pxToRem(20),
    color: "#000",
  },

  description: {
    color: "#000",
  },
}));

export default useStyles;
