import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  icon: {
    width: typography.pxToRem(44),
    height: typography.pxToRem(44),
  },

  button: {
    backgroundColor: palette.grey.light,
    padding: 0,
    boxShadow: `0px 3px 6px #00000029`,
    marginBottom: typography.pxToRem(10),
    borderRadius: " 0px 2px 2px 0px",
    border: 0,
    "& $icon": {
      filter: "brightness(0)",
    },
    "&.Mui-selected": {
      backgroundColor: palette.background.default,
      "& $icon": {
        filter: "none",
      },
      "&:hover": {
        backgroundColor: palette.background.default,
      },
    },
    "&.Mui-disabled": {
      backgroundColor: palette.grey.light,
      "& $icon": {
        opacity: 0.2,
      },
    },
    "&.MuiToggleButtonGroup-groupedVertical:not(:last-child)": {
      borderRadius: " 0px 2px 2px 0px",
    },
    "&.MuiToggleButtonGroup-groupedVertical:not(:first-child)": {
      borderRadius: " 0px 2px 2px 0px",
    },
    "&:hover": {
      "& $icon": {
        filter: "none",
      },
      backgroundColor: palette.background.default,
    },
  },
  pin: {
    backgroundColor: palette.primary.main,
    "&.Mui-selected": {
      backgroundColor: palette.primary.main,
      "& $icon": {
        filter: "brightness(0) invert()",
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
      },
    },
    "& $icon": {
      filter: "brightness(0) invert()",
    },
  },
  buttonGroup: {},
}));

export default useStyles;
