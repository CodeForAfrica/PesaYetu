import { createTheme } from '@codeforafrica/hurumap-ui';
import { createMuiTheme } from '@material-ui/core';

const FONT_FAMILY_HEADING = '"Lora", "serif"';
const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

/**
 * http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=11
 */
// const KHAKI_GREEN = '#7f9442';
// const DULL_ORANGE = '#de9f3a';
const COLOR_BREWER_DIVERGING = [
  '#a50026',
  '#d73027',
  '#f46d43',
  '#fdae61',
  '#fee08b',
  '#ffffbf',
  '#d9ef8b',
  '#a6d96a',
  '#66bd63',
  '#1a9850',
  '#006837'
].reverse();

const defaultTheme = createMuiTheme();
const Theme = createTheme({
  chart: {
    pie: {
      legendWidth: 50,
      colorScale: COLOR_BREWER_DIVERGING
    },
    area: {
      colorScale: COLOR_BREWER_DIVERGING
    },
    group: {
      colorScale: COLOR_BREWER_DIVERGING
    },
    bar: {
      style: {
        data: {
          fill: COLOR_BREWER_DIVERGING[0]
        },
        labels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        }
      }
    },
    axis: {
      labelWidth: 50,
      style: {
        tickLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        },
        axisLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fill: 'rgb(0,0,0)'
        }
      }
    }
  },
  palette: {
    primary: { main: '#2b3129', light: '#f1f1ed', dark: '#222822' },
    secondary: { main: '#000000', dark: '#2c2c2a', grey: '#2b3129' },
    highlight: { main: '#e7e452' }
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    fontHeading: FONT_FAMILY_HEADING,
    h1: {
      color: '#293229',
      fontFamily: FONT_FAMILY_HEADING,
      fontSize: '5rem',
      fontWeight: 400
    },
    h2: {
      color: '#293229',
      fontFamily: FONT_FAMILY_HEADING,
      textTransform: 'capitalize',
      fontWeight: 400,
      fontSize: '3.57143rem'
    }, // Hero section  heading
    h3: {
      color: '#293229',
      fontFamily: FONT_FAMILY_HEADING,
      // textTransform: 'capitalize',
      fontWeight: 'normal',
      fontSize: '1.5rem',
      lineHeight: 1.17,
      [defaultTheme.breakpoints.up('md')]: {
        color: '#222822',
        lineHeight: 1,
        fontSize: '2.8572rem'
      }
    }, // Section heading
    h4: {
      color: '#2b3129',
      fontFamily: FONT_FAMILY_HEADING,
      textTransform: 'capitalize',
      fontSize: '1.7143rem'
    },
    h5: {
      fontFamily: FONT_FAMILY_HEADING,
      textTransform: 'capitalize',
      fontSize: '1.4286rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '0.86px',
      color: '#293229'
    },
    h6: {
      fontFamily: FONT_FAMILY_HEADING,
      fontSize: '13px',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textTransform: 'capitalize',
      color: '#2c2c2a'
    },
    body2: {
      color: 'rgb(34, 40, 34)',
      fontFamily: FONT_FAMILY_TEXT,
      fontSize: '0.85715rem'
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_TEXT,
      fontSize: '0.786rem',
      lineHeight: 1.92
    },
    subtitle2: {
      fontFamily: FONT_FAMILY_TEXT,
      fontSize: '0.9286rem',
      fontWeight: 500
    },
    fontSmallDefault: {
      fontSize: 11,
      fontFamily: FONT_FAMILY_TEXT
    },
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      root: {
        border: '0.125rem solid #ffff',
        borderRadius: 0,
        color: '#fff'
      }
    },
    MuiCard: {
      root: {
        borderRadius: 0,
        boxShadow: 'none'
      }
    }
  }
});

export default Theme;
