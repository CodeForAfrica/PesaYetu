import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  inputLabel: {
    position: "inherit",
    marginBottom: typography.pxToRem(3),
    "&.MuiInputLabel-formControl": {
      transform: "inherit",
    },
  },
  label: {
    fontSize: typography.pxToRem(10),
    fontWeight: "700",
    color: "#666666",
    textTransform: "uppercase",
  },
  select: {
    backgroundColor: palette.background.paper,
    marginTop: "0 !important",
    minWidth: typography.pxToRem(200),
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
