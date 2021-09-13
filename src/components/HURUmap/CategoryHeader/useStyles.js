import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  description: {
    padding: `${typography.pxToRem(20)} 0`,
  },
}));

export default useStyles;
