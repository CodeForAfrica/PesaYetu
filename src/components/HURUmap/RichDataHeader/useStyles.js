import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  title: {
    borderBottom: "solid 5px #0067A3",
  },
  description: {
    marginTop: typography.pxToRem(20),
    textTransform: "uppercase",
  },
  image: {
    position: "relative",
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
  },
  pin: {
    position: "relative",
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
  },
  button: {
    marginTop: typography.pxToRem(7),
    height: typography.pxToRem(44),
    width: typography.pxToRem(44),
    minWidth: typography.pxToRem(44),
    backgroundColor: palette.grey.light,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  inputLabel: {
    position: "inherit",
    "&.MuiInputLabel-formControl": {
      transform: "inherit",
    },
  },
  label: {
    fontSize: typography.pxToRem(10),
    fontWeight: "700",
    color: "#666666",
    marginBottom: typography.pxToRem(3),
    textTransform: "uppercase",
  },
  underline: {
    border: `solid 1px ${palette.divider}`,
  },
  svgIconButton: {
    "&.MuiSvgIcon-root": {
      width: typography.pxToRem(27),
      height: typography.pxToRem(27),
    },
  },
  svgIcon: {
    "&.MuiSvgIcon-root": {
      width: typography.pxToRem(44),
      height: typography.pxToRem(44),
      backgroundColor: palette.grey.light,
      borderRadius: "50%",
      padding: typography.pxToRem(11),
    },
  },
  select: {
    backgroundColor: palette.background.paper,
    marginTop: "0 !important",
    minWidth: typography.pxToRem(200),
    "&.MuiPopover-paper": {
      top: typography.pxToRem(171),
    },
    "&.MuiInput-underline": {
      "&::before": {
        borderBottom: 0,
      },
      "&::after": {
        borderBottom: 0,
      },
    },
  },
  placeholder: {
    marginLeft: typography.pxToRem(15),
    color: "#959696",
  },
  formControl: {
    marginLeft: typography.pxToRem(14),
  },
}));

export default useStyles;
