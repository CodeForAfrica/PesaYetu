import { createTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';

const FONT_FAMILY_TEXT = '"Poppins", "sans-serif"';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile
      md: 608, // tablet
      lg: 1160, // desktop
    },
  },
  palette: {
    primary: {
      dark: '#0E68A1', // blue
      light: '#7DB2D3',
      main: '#0067A3',
    },
    secondary: {
      main: '#EE4538', // red
      light: '#F8A199',
    },
    background: {
      main: '#FFFFFF',
      light: '#F8F8F8', // white
      dark: '#2A2A2C',
      mediumgrey: '#DFDFDF',
      lightgrey: '#F0F0F0',
    },
    text: {
      main: '#333333',
      dark: '#212529',
      headings: '#1C2031',
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
  },
  widths: {
    values: {
      md: 656,
      lg: 1196,
    },
  },
});

const { palette, typography, overrides } = theme;
const { pxToRem } = typography;
// Typography
deepmerge(
  typography,
  {
    h1: {},
    h2: {},
    h3: {
      fontSize: typography.pxToRem(20),
    },
    h4: {
      fontSize: typography.pxToRem(20),
    },
    h5: {},
    body1: {},
    body2: {},
    caption: {},
    subtitle1: {},
    subtitle2: {},
  },
  { clone: false }
);

// Overrides
deepmerge(
  overrides,
  {
    MuiButton: {
      root: {},
      contained: {},
      containedPrimary: {
        color: palette.primary.main,
        backgroundColor: palette.background.main,
        boxShadow: 'none',
        borderRadius: pxToRem(50),
        letterspacing: '1.6px',
        textAlign: 'center',
        border: '2px solid #0067A3',
        textTransform: 'uppercase',
        transition: 'none !important',
        '&:hover': {
          color: palette.background.main,
          boxShadow: 'none',
          backgroundColor: palette.primary.main,
          border: '2px solid transparent',
          borderRadius: pxToRem(50),
        },
      },
    },
  }, // overides settings goes here
  { clone: false }
);
export default theme;
