import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  card: {
    width: typography.pxToRem(350),
    maxHeight: typography.pxToRem(400),
    [breakpoints.up('md')]: {
      width: typography.pxToRem(296),
    },
    [breakpoints.up('lg')]: {
      width: typography.pxToRem(356),
    },
    '& .MuiCardContent-root:last-child': {
      padding: 0,
    },
    boxShadow: 'none',
    backgroundColor: 'unset',
  },
  image: {
    height: typography.pxToRem(220),
    backgroundSize: 'auto',
    marginLeft: '-10px !important',
  },
  title: {
    marginTop: typography.pxToRem(20),
    marginBottom: typography.pxToRem(20),
  },
  description: {},
}));

export default useStyles;
