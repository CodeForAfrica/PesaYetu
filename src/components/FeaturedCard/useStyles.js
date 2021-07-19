import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    marginBottom: 37.5,
    [breakpoints.up('md')]: {
      marginBottom: typography.pxToRem(
        (widths.values.md * 59) / widths.values.xl
      ),
    },
    [breakpoints.up('lg')]: {
      marginBottom: typography.pxToRem(
        (widths.values.lg * 59) / widths.values.xl
      ),
    },
    [breakpoints.up('xl')]: {
      marginBottom: 59,
    },
  },
  content: {
    [breakpoints.up('md')]: {
      paddingLeft: typography.pxToRem(62),
    },
    [breakpoints.up('lg')]: {
      marginBottom: typography.pxToRem(82),
    },
  },
  description: {
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'flex',
      marginTop: typography.pxToRem((widths.values.md * 49) / widths.values.xl),
      '& p': {
        margin: 0,
      },
    },
    [breakpoints.up('lg')]: {
      marginTop: typography.pxToRem((widths.values.lg * 49) / widths.values.xl),
    },
    [breakpoints.up('xl')]: {
      marginTop: typography.pxToRem(49),
    },
  },
  image: {
    minHeight: typography.pxToRem(160),
    [breakpoints.up('md')]: {
      maxHeight: typography.pxToRem(
        (widths.values.md * 547) / widths.values.lg
      ),
    },
    [breakpoints.up('lg')]: {
      maxHeight: typography.pxToRem(415),
    },
  },
  title: {
    fontWeight: '400',
    [breakpoints.up('md')]: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
  },
}));

export default useStyles;
