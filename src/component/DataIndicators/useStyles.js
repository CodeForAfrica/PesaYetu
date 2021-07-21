import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: '#F0F0F0',
  },
  title: {
    textAlign: 'center',
    paddingBottom: typography.pxToRem(80),
    fontSize: typography.pxToRem(30),
    fontWeight: 900,
    [breakpoints.up('md')]: {
      fontSize: typography.pxToRem(48),
      marginTop: typography.pxToRem(20),
    },
  },
  section: {
    paddingTop: typography.pxToRem(102),
    paddingBottom: typography.pxToRem(163),
  },
  image: {
    width: 'max-content',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: typography.pxToRem(16),
    [breakpoints.up('lg')]: {
      display: 'block',
      marginLeft: typography.pxToRem(60),
    },
  },
  text: {
    marginLeft: typography.pxToRem(30),
    fontSize: typography.pxToRem(20),
    [breakpoints.up('lg')]: {
      marginTop: typography.pxToRem(20),
    },
  },
  container: {
    flexDirection: 'column',
    [breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
}));

export default useStyles;
