import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  card: {
    width: typography.pxToRem(350),
    boxShadow: 'none',
    backgroundColor: 'unset',
  },
  content: {
    padding: 0,
  },
  cardTitle: {
    margin: `${typography.pxToRem(20)} 0`,
  },
}));

export default useStyles;
