import createTheme from '@codeforafrica/hurumap-ui/core/styles/createTheme';

const FONT_FAMILY_HEADING = '"Lato", "sans-serif"';
const FONT_FAMILY_TEXT = '"Montserrat", "sans-serif"';

const COLOR_SCALE = ['#0067A3', '#559cc1', '#EE4538', '#9ac2dd'];
/**
 * http://colorbrewer2.org/#type=sequential&scheme=Blues&n=8
 */
// const COLOR_SCALE = [
//   '#084594',
//   '#2171b5',
//   '#4292c6',
//   '#6baed6',
//   '#9ecae1',
//   '#c6dbef',
//   '#deebf7',
//   '#f7fbff'
// ];

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
    primary: { main: '#0067A3' },
    secondary: { main: '#353745' }
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
