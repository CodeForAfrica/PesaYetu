import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    width: typography.pxToRem(350),
    [breakpoints.up('md')]: {
      width: typography.pxToRem(296),
    },
    [breakpoints.up('lg')]: {
      width: typography.pxToRem(356),
    },
  },
  card: {
    boxShadow: 'none',
  },
  image: {
    height: typography.pxToRem(220),
    backgroundSize: 'auto',
  },
  title: {
    marginTop: typography.pxToRem(20),
    marginBottom: typography.pxToRem(20),
  },
  description: {},
}));

export default useStyles;
