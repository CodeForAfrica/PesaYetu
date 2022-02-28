import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  icon: {
    marginLeft: typography.pxToRem(1),
  },
}));

export default useStyles;
