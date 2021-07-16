import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: '#F0F0F0',
  },
  title: {
    textAlign: 'center',
    paddingBottom: typography.pxToRem(80),
    fontSize: typography.pxToRem(48),
    fontWeight: 900,
  },
  section: {
    paddingTop: typography.pxToRem(102),
    paddingBottom: typography.pxToRem(163),
  },
}));

export default useStyles;
