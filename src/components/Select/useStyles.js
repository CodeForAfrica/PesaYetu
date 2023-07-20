import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {},
  formControl: {
    "& .MuiFilledInput-underline": {
      "&::before": {
        display: "none",
      },
    },
  },
  select: {
    height: "100%",
    width: typography.pxToRem(135),
    background: palette.background.paper,
    borderStyle: "none",
    borderRadius: 2,
    paddingLeft: typography.pxToRem(24),
    paddingBottom: typography.pxToRem(15),
    paddingTop: typography.pxToRem(15),
    fontSize: typography.caption.fontSize,
    "&:focus": {
      borderRadius: 2,
      background: palette.background.paper,
      borderColor: "none",
    },
    "&::before": {
      display: "none",
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(165),
    },
  },
  paper: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: "#F8F8F8",
    marginTop: typography.pxToRem(5),
    boxShadow: "none",
    "&.MuiPaper-rounded": {
      borderRadius: "0",
    },
  },

  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 400,
      paddingTop: 12,
      paddingBottom: 12,
    },
    "& li.Mui-selected": {
      fontWeight: "bold",
    },
  },
  inputLabel: {
    marginTop: typography.pxToRem(15),
  },
  label: {
    color: "#959696",
  },
  helper: {
    fontSize: typography.pxToRem(10),
    fontWeight: "700",
    color: "#666666",
    textTransform: "uppercase",
    marginLeft: 0,
    marginBottom: typography.pxToRem(5),
  },
  filled: {},
  filledPlaceholder: {
    color: "#959696",
  },
  placeholder: {
    color: "#959696",
    "&.Mui-selected": {
      display: "none",
    },
  },
}));

export default useStyles;
