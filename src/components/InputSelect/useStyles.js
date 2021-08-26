import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  formControl: {
    margin: "1rem .25rem",
    [breakpoints.up("lg")]: {
      margin: "1rem .5rem",
    },
  },
  inputBase: {
    padding: typography.pxToRem(2),
    borderRadius: typography.pxToRem(4),
    color: palette.text.primary,
    backgroundColor: palette.background.default,
    boxShadow: "0px 1px 4px #15223214",
    height: typography.pxToRem(42),
    width: typography.pxToRem(243),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(186),
    },
  },
  inputBaseDisabled: {
    padding: typography.pxToRem(2),
    borderRadius: typography.pxToRem(4),
    color: palette.text.primary,
    backgroundColor: palette.background.light,
    boxShadow: "0px 1px 4px #15223214",
    height: typography.pxToRem(42),
    width: typography.pxToRem(243),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(186),
    },
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.light,
    },
  },
  inputBaseInput: {
    textAlign: "left",
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(12),
    width: "100%",
    "label[data-shrink=false] + .MuiInputBase-formControl &::placeholder": {
      opacity: "0.5!important",
    },
  },
  inputBaseInputDisabled: {
    textAlign: "left",
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(12),
    width: "100%",
    backgroundColor: palette.background.light,
    "label[data-shrink=false] + .MuiInputBase-formControl &::placeholder": {
      opacity: "0.5!important",
    },
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.light,
    },
  },
  select: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.default,
    },
  },
  selectDisabled: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.light,
    },
  },
  title: {
    fontWeight: "bolder",
    paddingBottom: "0.5rem",
    fontFamily: typography.h6.fontFamily,
  },
  menuPaper: {
    marginTop: "1.5rem",
    overflow: "visible",
  },
  menuMenuList: {
    paddingTop: 0,
    overflow: "visible",
    "&:before": {
      position: "absolute",
      top: typography.pxToRem(-10),
      left: "20%",
      borderColor: "transparent transparent #fff transparent",
      borderWidth: "0 0.5em 0.5em 0.5em",
      width: 0,
      height: 0,
      margin: "auto",
      content: '""',
      display: "block",
      borderStyle: "solid",
    },
  },
  menuitem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: palette.background.default,
    },
  },
  placeholder: {
    color: "#A0A0A0",
  },
  name: {
    color: palette.text.primary,
    display: "block",
    whiteSpace: "nowrap",
    width: "17ch",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default useStyles;
