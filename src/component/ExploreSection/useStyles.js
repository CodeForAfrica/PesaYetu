import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    backgroundColor: '#F8F8F8',
    padding: `${typography.pxToRem(80)} 0`,
  },
  section: {},
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: typography.pxToRem(40),
    color: '#000',
  },
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
    paddingTop: `${typography.pxToRem(40)}`,
    position: 'unset',
    '& button': {
      borderColor: palette.divider,
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
    },
    '& .react-multi-carousel-dot--active button': {
      borderColor: '#A0A0A0',
      background: '#000',
    },
  },
}));

export default useStyles;
