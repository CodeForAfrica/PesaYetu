import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  shift: {
    marginLeft: (props) => typography.pxToRem(props.drawerWidth),
  },
}));

export default useStyles;
