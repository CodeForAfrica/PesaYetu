import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: typography.pxToRem(40),
  },
  dots: {
    justifyContent: 'flex-start',
    margin: `0 ${typography.pxToRem(30)}`,
    padding: `${typography.pxToRem(22)} 0`,
    '& button': {
      background: '#000',
      borderColor: palette.divider,
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
    },
    '& .react-multi-carousel-dot--active button': {
      borderColor: '#A0A0A0',
      background: palette.background.default,
    },
  },
}));

export default useStyles;
