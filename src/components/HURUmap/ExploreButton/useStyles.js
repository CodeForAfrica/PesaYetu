import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  button: {
    backgroundColor: palette.grey.light,
    boxShadow: `0px 3px 6px #00000029`,
    marginBottom: typography.pxToRem(10),
    border: 0,
  },
  selected: {
    backgroundColor: palette.background.default,
  },

  icon: {},
  selectedIcon: {},
}));

export default useStyles;
