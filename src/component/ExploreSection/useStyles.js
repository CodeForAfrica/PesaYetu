import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: typography.pxToRem(40),
  },
}));

export default useStyles;
