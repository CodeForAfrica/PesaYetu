import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  icon: {
    width: typography.pxToRem(27),
    height: typography.pxToRem(27),
  },
  button: {
    backgroundColor: palette.grey.light,
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
    },
    "&.Mui-disabled": {
      backgroundColor: palette.grey.light,
      "& $icon": {
        opacity: 0.2,
      },
    },
    "&:hover": {
      "& $icon": {
        filter: "none",
      },
      backgroundColor: palette.background.default,
    },
  },
}));

export default useStyles;
