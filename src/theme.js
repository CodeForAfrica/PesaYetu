import createTheme from '@codeforafrica/hurumap-ui/core/styles/createTheme';

const FONT_FAMILY_HEADING = '"Lato", "sans-serif"';
const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

const COLOR_SCALE = [
  '#3385b5',
  '#0067A3',
  '#004872',
  '#f16a5f',
  '#ee4538',
  '#a63027'
];

const theme = createTheme({
  chart: {
    area: {
      colorScale: COLOR_SCALE
    },
    axis: {
      style: {
        tickLabels: {
          fill: 'rgb(0,0,0)',
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        axisLabels: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10,
          fill: 'rgb(0,0,0)'
        }
      }
    },
    bar: {
      barWidth: 30,
      domainPadding: { x: [25, 25] },
      padding: { top: 0, right: 0, bottom: 50, left: 0 },
      style: {
        data: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        labels: {
          fill: 'rgb(0,0,0)',
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        }
      }
    },
    colorScale: COLOR_SCALE,
    group: {
      colorScale: COLOR_SCALE
    },
    pie: {
      colorScale: COLOR_SCALE,
      height: 250,
      legendWidth: 150,
      origin: { x: 150, y: 125 },
      padding: 0,
      style: {
        data: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 10
        },
        labels: {
          fontFamily: FONT_FAMILY_TEXT,
          fontSize: 16,
          fill: 'rgb(0,0,0)'
        }
      },
      width: 450
    }
  },
  palette: {
    background: { default: '#ffff' },
    primary: { main: '#0067A3', dark: '#004872', light: '#3385b5' },
    secondary: { main: '#353745', dark: '#a63027', light: '#f16a5f' }
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    h1: {
      fontFamily: FONT_FAMILY_HEADING
    },
    h2: {
      fontFamily: FONT_FAMILY_HEADING
    },
    h3: {
      fontFamily: FONT_FAMILY_HEADING
    },
    h4: {
      fontFamily: FONT_FAMILY_HEADING
    },
    h5: {
      fontFamily: FONT_FAMILY_HEADING
    },
    h6: {
      fontFamily: FONT_FAMILY_HEADING
    }
  },
  overrides: {
    MuiButton: {
      root: {
        border: '0.125rem solid #ffff',
        borderRadius: 0
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

export default theme;
